<script>
    export let grabHandle;
</script>

<Node id="hello" bgColor="green" label="Hello Node" let:grabHandle position={{ x: 100, y: 300 }}>
    <div use:grabHandle style="cursor: grab;">
        <HelloNode />
    </div>
</Node>
