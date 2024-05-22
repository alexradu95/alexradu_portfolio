<script lang="ts">
  import { Message } from "./ChatUI";
  import { writable } from "svelte/store";

  export let messages = writable<Message[]>([]);
  import { onMount, afterUpdate } from "svelte";
  import ChatMessage from "./ChatMessage.svelte";

  let chatContainer;

  const scrollToBottom = () => {
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight - chatContainer.clientHeight + 5;
    }
  };

  onMount(scrollToBottom);
  afterUpdate(scrollToBottom);
</script>

<div class="flex flex-col space-y-2 p-2 pb-16 bg-gray-900 text-white h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-900" id="chatui-chat" bind:this={chatContainer}>
  {#each $messages as { kind, text }, index (index)}
    <ChatMessage {kind} {text} key={index} />
  {/each}
</div>
