<script lang="ts">
  import { Message } from "./ChatUI";
  import { writable } from "svelte/store";

  export let messages = writable<Message[]>([]);
</script>

<div class="chatui-chat" id="chatui-chat">
  {#each $messages as { kind, text }, index (index)}
    <div class={`msg ${kind}-msg`} key={index}>
      <div class="msg-bubble">
        <div class="msg-text">{text}</div>
      </div>
    </div>
  {/each}
</div>
