<script lang="ts">
  import { onMount } from "svelte";
  import App from "$lib/components/application/App.svelte";
  import { chat_ui, updateMessage, messages, prompt, runtimeStats } from "./ChatUI";
  import ChatInput from "./ChatInput.svelte";
  import ChatMessages from "./ChatMessages.svelte";
  import ChatControls from "./ChatControls.svelte";

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
      <ChatMessages {messages} />
      <ChatInput {prompt} on:send={handleSend} />
    </div>
    <ChatControls {runtimeStats} />
  </div>
</App>
