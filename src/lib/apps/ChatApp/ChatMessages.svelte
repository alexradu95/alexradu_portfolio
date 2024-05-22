<script lang="ts">
  import { Message } from "./ChatUI";
  import { writable } from "svelte/store";

  export let messages = writable<Message[]>([]);
</script>

<div class="chatui-chat flex flex-col space-y-2 p-2 bg-gray-900 text-white h-full" id="chatui-chat">
  {#each $messages as { kind, text }, index (index)}
    <div class={`msg ${kind}-msg flex ${kind === 'right' ? 'justify-end' : 'justify-start'}`} key={index}>
      <div class="msg-bubble max-w-xs p-2 rounded-lg shadow-md bg-gray-700">
        <div class="msg-text text-gray-200">{text}</div>
      </div>
    </div>
  {/each}
</div>
