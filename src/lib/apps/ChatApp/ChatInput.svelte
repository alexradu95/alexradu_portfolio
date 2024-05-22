<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";

  export let prompt = writable("");

  const dispatch = createEventDispatcher();

  const handleSend = () => {
    dispatch("send");
  };
  import { chat_ui, messages } from "./ChatUI";

  const handleReset = () => {
    chat_ui.onReset(() => messages.set([])).catch((error) => console.log(error));
  };
</script>

<div class="chatui-inputarea flex items-center space-x-2">
  <input
    id="chatui-input"
    type="text"
    class="chatui-input flex-grow p-2 border border-gray-600 bg-gray-700 text-white rounded"
    placeholder="Enter your message..."
    on:keydown={(event) => { if (event.key === "Enter") handleSend(); }}
    bind:value={$prompt}
  />
  <button class="chatui-btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700" on:click={handleSend}> Send </button>
  <button class="chatui-btn bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700" on:click={handleReset}>
    Reset Chat
  </button>
</div>
