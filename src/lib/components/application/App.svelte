<script>

import {Node, Svelvet} from "svelvet";
import DefaultNode from './widgets/DefaultNode.svelte';
import CurrentHourNode from './widgets/CurrentHourNode.svelte';
import HelloNode from './widgets/HelloNode.svelte';
import ExampleNode from './widgets/ExampleNode.svelte';

</script>

<Svelvet id="my-canvas" style="width: 100vw; height: 100vh;" theme="dark" TD minimap controls>
    <DefaultNode />
    <CurrentHourNode />
    <HelloNode />
    <ExampleNode />
</Svelvet>
