<script lang="ts">
  import { onMount } from "svelte";
  import { chat_ui, updateMessage, messages, prompt, runtimeStats } from "./ChatUI";
  import ChatInput from "./ChatInput.svelte";
  import ChatMessages from "./ChatMessages.svelte";
  import App from '$lib/components/application/App.svelte';

  let isLoading = false;

  const handleSend = async () => {
    if (isLoading) return;
    isLoading = true;
    if (!chat_ui.isChatLoaded()) {
      await chat_ui.initChat(updateMessage);
    }
    chat_ui.onGenerate($prompt, updateMessage, (stats: string) => runtimeStats.set(stats)).catch(error => console.log(error));
    isLoading = false;
  };

  onMount(async () => {
    if (!chat_ui.isChatLoaded()) {
      isLoading = true;
      await chat_ui.initChat(updateMessage);
      isLoading = false;
    }
  });
</script>

<App>
    {#if isLoading}
      <div class="flex items-center justify-center h-full">
        <p class="text-white">Loading Model, please wait...</p>
      </div>
    {:else}
      <ChatMessages {messages} />
      <ChatInput {prompt} on:send={handleSend} {isLoading} />
    {/if}
</App>
