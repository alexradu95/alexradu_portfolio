<script lang="ts">
  import { chat_ui, messages } from "./ChatUI";
  import { writable } from "svelte/store";

  export let runtimeStats = writable("");

  const handleReset = () => {
    chat_ui.onReset(() => messages.set([])).catch((error) => console.log(error));
  };
</script>

<div class="chatui-extra-control flex flex-col items-center space-y-2 text-white">
  <button class="chatui-btn bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700" on:click={handleReset}>
    Reset Chat
  </button>
  <label id="chatui-info-label" class="text-gray-400">{$runtimeStats}</label>
</div>
