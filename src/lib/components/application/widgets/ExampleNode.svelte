<script>
    export let grabHandle;
</script>

<Node id="example" bgColor="yellow" label="Example Node" let:grabHandle position={{ x: 300, y: 300 }}>
    <div use:grabHandle style="cursor: grab;">
        <ExampleNode />
    </div>
</Node>
