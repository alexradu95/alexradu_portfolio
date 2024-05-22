<script>
    export let grabHandle;
</script>

<Node id="current-hour" bgColor="blue" label="Current Hour Node" let:grabHandle position={{ x: 300, y: 100 }}>
    <div use:grabHandle style="cursor: grab;">
        <CurrentHourNode />
    </div>
</Node>
