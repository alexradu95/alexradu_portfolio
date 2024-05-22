import { MLCEngineInterface, ChatCompletionMessageParam } from "@mlc-ai/web-llm";

export class LLMChatInitializer {
  private engine: MLCEngineInterface;
  private chatLoaded = false;
  private requestInProgress = false;

  constructor(engine: MLCEngineInterface) {
    this.engine = engine;
  }

  async asyncInitChat(messageUpdate: (kind: string, text: string, append: boolean) => void) {
    if (this.chatLoaded) {
      console.log("Chat is already loaded.");
      return;
    }
    if (!this.requestInProgress) {
      console.log("Starting chat initialization...");
      this.requestInProgress = true;
      messageUpdate("init", "", true);
      this.engine.setInitProgressCallback((report: { text: string }) => {
        console.log("Initialization progress:", report.text);
        messageUpdate("init", report.text, false);
      });
      try {
        const selectedModel = "Llama-3-8B-Instruct-q4f32_1"; // Adjust model as needed
        console.log("Reloading model:", selectedModel);
        await this.engine.reload(selectedModel);
        console.log("Model reloaded successfully.");
      } catch (err) {
        console.error("Initialization error:", err);
        messageUpdate("error", "Init error, " + (err?.toString() ?? ""), true);
        console.log(err);
        await this.unloadChat();
        this.requestInProgress = false;
        return;
      }
      this.requestInProgress = false;
      this.chatLoaded = true;
      console.log("Chat initialization completed.");
    }
  }

  public async unloadChat() {
    await this.engine.unload();
    this.chatLoaded = false;
  }
}
