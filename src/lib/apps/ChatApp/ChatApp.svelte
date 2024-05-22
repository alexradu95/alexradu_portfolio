<script lang="ts">
  import { onMount } from "svelte";
  import { MLCEngine } from "@mlc-ai/web-llm";
  import ChatUI from "./chat_ui";
  import App from "$lib/components/application/App.svelte";
  import { writable } from "svelte/store";
  
  const messages = writable<{ kind: string; text: string }[]>([]);
  const prompt = writable("");
  const runtimeStats = writable("");
  const chat_ui = new ChatUI(new MLCEngine());

  const updateMessage = (kind: string, text: string, append: boolean) => {
    if (kind == "init") {
      text = "[System Initalize] " + text;
    }
    messages.update((msgCopy) => {
      if (msgCopy.length == 0 || append) {
        return [...msgCopy, { kind, text }];
      } else {
        msgCopy[msgCopy.length - 1] = { kind, text };
        return [...msgCopy];
      }
    });
  };

  onMount(() => {
    chat_ui.asyncInitChat(updateMessage).catch((error) => {
      console.log(error);
    });
  });
</script>

<App title="Chat Application">
  <div class="flex flex-col items-center">
    <button
      class="chatui-btn"
      on:click={() => {
        chat_ui.asyncInitChat(updateMessage).catch((error) => {
          console.log(error);
        });
      }}
    >
      Download Model
    </button>

    <div class="chatui">
      <div class="chatui-chat" id="chatui-chat">
        {#each $messages as { kind, text }, index}
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
          on:keydown={(event) => {
            if (event.key === "Enter") {
              chat_ui
                .onGenerate($prompt, updateMessage, (stats) => runtimeStats.set(stats))
                .catch((error) => console.log(error));
            }
          }}
          bind:value={$prompt}
        />
        <button
          class="chatui-btn"
          on:click={() => {
            chat_ui
              .onGenerate($prompt, updateMessage, (stats) => runtimeStats.set(stats))
              .catch((error) => console.log(error));
          }}
        >
          Send
        </button>
      </div>
    </div>

    <div class="chatui-extra-control">
      <button
        class="chatui-btn"
        on:click={() => {
          chat_ui.onReset(() => messages.set([])).catch((error) => console.log(error));
        }}
      >
        Reset Chat
      </button>
      <label id="chatui-info-label">{$runtimeStats}</label>
    </div>
  </div>
</App>
