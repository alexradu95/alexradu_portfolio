<script lang="ts">
  export let kind: string;
  export let text: string;
</script>

<div class={`flex ${kind === 'right' ? 'justify-end' : 'justify-start'} m-1`}>
  <div class={`max-w-xs p-2 rounded-lg shadow-md ${kind === 'right' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-gray-200'}`}>
    <div>{text}</div>
  </div>
</div>
