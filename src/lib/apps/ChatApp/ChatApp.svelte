<script lang="ts">
  import { onMount } from "svelte";
  import App from "$lib/components/application/App.svelte";
  import { chat_ui, updateMessage, messages, prompt, runtimeStats } from "./ChatUI";
  import ChatInput from "./ChatInput.svelte";
  import ChatMessages from "./ChatMessages.svelte";

  const handleSend = () => {
    chat_ui.onGenerate($prompt, updateMessage, (stats: string) => runtimeStats.set(stats)).catch(error => console.log(error));
  };

  onMount(() => {
    chat_ui.asyncInitChat(updateMessage).catch(error => console.log(error));
  });
</script>

<App title="Chat Application">
  <div class="flex flex-col h-full">
    <div class="m-1 p-2 rounded-lg flex-grow overflow-y-auto relative">
      <div class="flex flex-col items-center p-4 space-y-4 bg-gray-900 text-white min-h-screen">
        <div class="chatui w-full max-w-2xl bg-gray-800 shadow-md rounded-lg p-4 flex flex-col space-y-4 h-full">
          <div class="flex-grow overflow-y-auto mb-20">
            <ChatMessages {messages} />
          </div>
          <ChatInput {prompt} on:send={handleSend} class="absolute bottom-0 left-0 right-0" />
        </div>
      </div>
    </div>
  </div>
</App>
