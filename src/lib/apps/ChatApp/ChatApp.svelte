<script lang="ts">
  import { onMount } from "svelte";
  import App from "$lib/components/application/App.svelte";
  import { chat_ui, updateMessage, messages, prompt, runtimeStats } from "./ChatUI";
  import { LLMChatInitializer } from "./LLMChatInitializer";
  import ChatInput from "./ChatInput.svelte";
  import ChatMessages from "./ChatMessages.svelte";

  const handleSend = () => {
    chat_ui.onGenerate($prompt, updateMessage, (stats: string) => runtimeStats.set(stats)).catch(error => console.log(error));
  };

  onMount(() => {
    const initializer = new LLMChatInitializer(chat_ui.engine);
    initializer.asyncInitChat(updateMessage).catch(error => console.log(error));
  });
</script>

<App title="Chat Application">
    <ChatMessages {messages} />
    <ChatInput {prompt} on:send={handleSend} class="fixed bottom-0 left-0 right-0" />
</App>
