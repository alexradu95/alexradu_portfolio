<script>

    import {Node, Svelvet} from "svelvet";
import CurrentHourNode from './CurrentHourNode.svelte';
import HelloNode from './HelloNode.svelte';

</script>

<Svelvet id="my-canvas" style="width: 100vw; height: 100vh;" theme="dark" TD minimap controls locked>
    <Node id="alpha" bgColor="red" label="Default Node" let:grabHandle>
        <div use:grabHandle style="cursor: grab;">
            Default Node
        </div>
    </Node>
    <Node id="current-hour" bgColor="blue" label="Current Hour Node">
        <CurrentHourNode />
    </Node>
    <Node id="hello" bgColor="green" label="Hello Node">
        <HelloNode />
    </Node>
    <Node id="example" bgColor="yellow" label="Example Node">
        <ExampleNode />
    </Node>
</Svelvet>
    import ExampleNode from './ExampleNode.svelte';
