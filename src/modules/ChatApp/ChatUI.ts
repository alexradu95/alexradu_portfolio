import { writable } from "svelte/store";
import { MLCEngineInterface, ChatCompletionMessageParam, MLCEngine } from "@mlc-ai/web-llm";

export type Message = { kind: string, text: string };

export const messages = writable<Message[]>([]);
export const prompt = writable("");
export const runtimeStats = writable("");

import { LLMChatInitializer } from "./LLMChatInitializer";

export class ChatUI {
  private initializer: LLMChatInitializer;
  private engine: MLCEngineInterface;
  private chatLoaded = false;
  private requestInProgress = false;
  private chatRequestChain: Promise<void> = Promise.resolve();
  private chatHistory: ChatCompletionMessageParam[] = [];

  constructor(engine: MLCEngineInterface) {
    this.engine = engine;
    this.initializer = new LLMChatInitializer(engine);
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
    return this.chatRequestChain;
  }

  async onReset(clearMessages: () => void) {
    if (this.requestInProgress) this.engine.interruptGenerate();
    this.chatHistory = [];
    this.pushTask(async () => {
      await this.engine.resetChat();
      clearMessages();
    });
    return this.chatRequestChain;
  }

  public async initChat(messageUpdate: (kind: string, text: string, append: boolean) => void) {
    await this.initializer.asyncInitChat(messageUpdate);
  }

  public isChatLoaded() {
    return this.chatLoaded;
  }

  private async asyncGenerate(prompt: string, messageUpdate: (kind: string, text: string, append: boolean) => void, setRuntimeStats: (runtimeStats: string) => void) {
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
        console.log(curMessage)
      }
      const output = await this.engine.getMessage();
      this.chatHistory.push({ role: "assistant", content: output });
      messageUpdate("left", output, false);
      this.engine.runtimeStatsText().then(stats => setRuntimeStats(stats)).catch(error => console.log(error));
    } catch (err) {
      messageUpdate("error", "Generate error, " + (err?.toString() ?? ""), true);
      console.log(err);
      await this.initializer.unloadChat();
    }
    this.requestInProgress = false;
  }
}

export const chat_ui = new ChatUI(new MLCEngine());

export const updateMessage = (kind: string, text: string, append: boolean = true) => {
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
