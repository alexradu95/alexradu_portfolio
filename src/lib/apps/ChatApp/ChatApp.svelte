<script lang="ts">

  import { onMount } from "svelte";

  import App from "$lib/components/application/App.svelte";

  import { writable } from "svelte/store";

  import { MLCEngineInterface, ChatCompletionMessageParam, MLCEngine } from "@mlc-ai/web-llm";



  type Message = { kind: string, text: string };



  const messages = writable<Message[]>([]);

  const prompt = writable("");

  const runtimeStats = writable("");



  class ChatUI {

    private engine: MLCEngineInterface;

    private chatLoaded = false;

    private requestInProgress = false;

    private chatRequestChain: Promise<void> = Promise.resolve();

    private chatHistory: ChatCompletionMessageParam[] = [];



    constructor(engine: MLCEngineInterface) {

      this.engine = engine;

    }



    private pushTask(task: () => Promise<void>) {

      const lastEvent = this.chatRequestChain;

      this.chatRequestChain = lastEvent.then(task);

    }



    async onGenerate(prompt: string, messageUpdate: (kind: string, text: string, append: boolean) => void, setRuntimeStats: (runtimeStats: string) => void) {

      if (this.requestInProgress) return;

      this.pushTask(async () => {

        await this.asyncGenerate(prompt, messageUpdate, setRuntimeStats);

      });

      return this.chatRequestChain

    }



    async onReset(clearMessages: () => void) {

      if (this.requestInProgress) this.engine.interruptGenerate();

      this.chatHistory = [];

      this.pushTask(async () => {

        await this.engine.resetChat();

        clearMessages();

      });

      return this.chatRequestChain

    }



    async asyncInitChat(messageUpdate: (kind: string, text: string, append: boolean) => void) {

      if (this.chatLoaded) return;

      this.requestInProgress = true;

      messageUpdate("init", "", true);

      this.engine.setInitProgressCallback((report: { text: string }) => messageUpdate("init", report.text, false));

      try {

        const selectedModel = "Llama-3-8B-Instruct-q4f32_1"; // Adjust model as needed

        await this.engine.reload(selectedModel);

      } catch (err) {

        messageUpdate("error", "Init error, " + (err?.toString() ?? ""), true);

        console.log(err);

        await this.unloadChat();

        this.requestInProgress = false;

        return;

      }

      this.requestInProgress = false;

      this.chatLoaded = true;

    }



    private async unloadChat() {

      await this.engine.unload();

      this.chatLoaded = false;

    }



    private async asyncGenerate(prompt: string, messageUpdate: (kind: string, text: string, append: boolean) => void, setRuntimeStats: (runtimeStats: string) => void) {

      await this.asyncInitChat(messageUpdate);

      this.requestInProgress = true;

      if (prompt === "") {

        this.requestInProgress = false;

        return;

      }

      messageUpdate("right", prompt, true);

      messageUpdate("left", "", true);

      try {

        this.chatHistory.push({ role: "user", content: prompt });

        let curMessage = "";

        const completion = await this.engine.chat.completions.create({ stream: true, messages: this.chatHistory });

        for await (const chunk of completion) {

          const curDelta = chunk.choices[0].delta.content;

          if (curDelta) curMessage += curDelta;

          messageUpdate("left", curMessage, false);

        }

        const output = await this.engine.getMessage();

        this.chatHistory.push({ role: "assistant", content: output });

        messageUpdate("left", output, false);

        this.engine.runtimeStatsText().then(stats => setRuntimeStats(stats)).catch(error => console.log(error));

      } catch (err) {

        messageUpdate("error", "Generate error, " + (err?.toString() ?? ""), true);

        console.log(err);

        await this.unloadChat();

      }

      this.requestInProgress = false;

    }

  }



  const chat_ui = new ChatUI(new MLCEngine());



  const updateMessage = (kind: string, text: string, append: boolean = true) => {

    if (kind === "init") text = "[System Initialize] " + text;

    messages.update(msgCopy => {

      if (msgCopy.length === 0 || append) {

        return [...msgCopy, { kind, text }];

      } else {

        msgCopy[msgCopy.length - 1] = { kind, text };

        return [...msgCopy];

      }

    });

  };



  const handleSend = () => {

    chat_ui.onGenerate($prompt, updateMessage, (stats: string) => runtimeStats.set(stats)).catch(error => console.log(error));

  };



  onMount(() => {

    chat_ui.asyncInitChat(updateMessage).catch(error => console.log(error));

  });

</script>



<App title="Chat Application">

  <div class="flex flex-col items-center">

    <button class="chatui-btn" on:click={() => { chat_ui.asyncInitChat(updateMessage).catch((error) => console.log(error)); }}>

      Download Model

    </button>

    <div class="chatui">

      <div class="chatui-chat" id="chatui-chat">

        {#each $messages as { kind, text }, index (index)}

          <div class={`msg ${kind}-msg`} key={index}>

            <div class="msg-bubble">

              <div class="msg-text">{text}</div>

            </div>

          </div>

        {/each}

      </div>

      <div class="chatui-inputarea">

        <input

                id="chatui-input"

                type="text"

                class="chatui-input"

                placeholder="Enter your message..."

                on:keydown={(event) => { if (event.key === "Enter") handleSend(); }}

                bind:value={$prompt}

        />

        <button class="chatui-btn" on:click={handleSend}> Send </button>

      </div>

    </div>

    <div class="chatui-extra-control">

      <button class="chatui-btn" on:click={() => { chat_ui.onReset(() => messages.set([])).catch((error) => console.log(error)); }}>

        Reset Chat

      </button>

      <label id="chatui-info-label">{$runtimeStats}</label>

    </div>

  </div>

</App>



<style>

  /* Add your styles here if needed */

</style>