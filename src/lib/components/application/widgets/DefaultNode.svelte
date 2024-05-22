<script>
    export let grabHandle;
</script>

<Node id="alpha" bgColor="red" label="Default Node" let:grabHandle position={{ x: 100, y: 100 }}>
    <div use:grabHandle style="cursor: grab;">
        Default Node
    </div>
</Node>
