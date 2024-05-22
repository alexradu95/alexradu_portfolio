<script lang="ts">
  import { chat_ui, messages } from "./ChatUI";
  import { writable } from "svelte/store";

  export let runtimeStats = writable("");

  const handleReset = () => {
    chat_ui.onReset(() => messages.set([])).catch((error) => console.log(error));
  };
</script>

<div class="chatui-extra-control">
  <button class="chatui-btn" on:click={handleReset}>
    Reset Chat
  </button>
  <label id="chatui-info-label">{$runtimeStats}</label>
</div>
