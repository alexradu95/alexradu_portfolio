<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";
  import { chat_ui, messages, runtimeStats } from "./ChatUI";
  import { LLMChatInitializer } from "./LLMChatInitializer";

  export let prompt = writable("");

  const dispatch = createEventDispatcher();

  export let isLoading = false;

  const handleSend = () => {
    if (isLoading) return;
    dispatch("send");
  };

  const handleReset = () => {
    chat_ui.onReset(() => messages.set([])).catch((error) => console.log(error));
  };
</script>

<div class="flex items-center space-x-2 bg-gray-800 p-4 fixed bottom-0 left-0 right-0">
  <input
    id="chatui-input"
    type="text"
    class="flex-grow p-2 border border-gray-600 bg-gray-700 text-white rounded"
    placeholder="Enter your message..."
    on:keydown={(event) => { if (event.key === "Enter") handleSend(); }}
    bind:value={$prompt}
  />
  <button class="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700" on:click={handleSend} disabled={isLoading}> Send </button>
  <button class="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700" on:click={handleReset} disabled={isLoading}>
    Reset Chat
  </button>
  <label id="chatui-info-label" class="text-gray-400">{$runtimeStats}</label>
</div>
