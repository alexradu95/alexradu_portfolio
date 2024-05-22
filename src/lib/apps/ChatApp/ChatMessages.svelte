<script lang="ts">
  import { Message } from "./ChatUI";
  import { writable } from "svelte/store";

  export let messages = writable<Message[]>([]);
</script>

<div class="flex flex-col space-y-2 p-2 bg-gray-900 text-white h-full overflow-y-auto" id="chatui-chat">
  {#each $messages as { kind, text }, index (index)}
    <div class={`flex ${kind === 'right' ? 'justify-end' : 'justify-start'} m-1`} key={index}>
      <div class="w-full p-2 rounded-lg shadow-md bg-gray-700">
        <div class="text-gray-200">{text}</div>
      </div>
    </div>
  {/each}
</div>
