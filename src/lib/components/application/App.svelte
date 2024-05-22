<script>

    import {Node, Svelvet} from "svelvet";
import CurrentHourNode from './CurrentHourNode.svelte';
import HelloNode from './HelloNode.svelte';
    import ExampleNode from "$lib/components/application/ExampleNode.svelte";

</script>

<Svelvet id="my-canvas" style="width: 100vw; height: 100vh;" theme="dark" TD minimap controls locked>
    <Node id="alpha" bgColor="red" label="Default Node" let:grabHandle position={{ x: 100, y: 100 }}>
        <div use:grabHandle style="cursor: grab;">
            Default Node
        </div>
    </Node>
    <Node id="current-hour" bgColor="blue" label="Current Hour Node" let:grabHandle position={{ x: 300, y: 100 }}>
        <div use:grabHandle style="cursor: grab;">
            <CurrentHourNode />
        </div>
    </Node>
    <Node id="hello" bgColor="green" label="Hello Node" let:grabHandle position={{ x: 100, y: 300 }}>
        <div use:grabHandle style="cursor: grab;">
            <HelloNode />
        </div>
    </Node>
    <Node id="example" bgColor="yellow" label="Example Node" let:grabHandle position={{ x: 300, y: 300 }}>
        <div use:grabHandle style="cursor: grab;">
            <ExampleNode />
        </div>
    </Node>
</Svelvet>
    import ExampleNode from './ExampleNode.svelte';
