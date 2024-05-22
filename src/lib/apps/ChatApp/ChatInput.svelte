<script lang="ts">
  import { createEventDispatcher } from "svelte";
  import { writable } from "svelte/store";

  export let prompt = writable("");

  const dispatch = createEventDispatcher();

  const handleSend = () => {
    dispatch("send");
  };
</script>

<div class="chatui-inputarea">
  <input
    id="chatui-input"
    type="text"
    class="chatui-input"
    placeholder="Enter your message..."
    on:keydown={(event) => { if (event.key === "Enter") handleSend(); }}
    bind:value={$prompt}
  />
  <button class="chatui-btn" on:click={handleSend}> Send </button>
</div>
