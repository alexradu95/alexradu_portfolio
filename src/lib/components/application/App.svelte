<script>

import {Node, Svelvet} from "svelvet";
import ChatAppNode from "./ChatAppNode.svelte";

</script>

<Svelvet id="my-canvas" style="width: 100vw; height: 100vh;" theme="dark" TD minimap controls>
    <Node label="Hello" position={{ x: 100, y: 100 }} />
    <Node label="World" position={{ x: 300, y: 100 }} />
    <Node label="ChatApp" position={{ x: 500, y: 100 }}>
        <ChatAppNode />
    </Node>
</Svelvet>
