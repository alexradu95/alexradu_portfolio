<script>

import {Node, Resizer, Svelvet} from "svelvet";
import ChatApp from "@/modules/ChatApp/ChatApp.svelte";

</script>

<Svelvet id="my-canvas" theme="dark" TD minimap controls>
    <Node label="Hello" position={{ x: 100, y: 100 }} />
    <Node label="World" position={{ x: 300, y: 100 }} />

    <Node let:selected label="ChatApp" position={{ x: 500, y: 100 }}  dimensions={{ width: 600, height: 400 }}>
        <div class="node" class:selected>
            <Resizer width height rotation/>
        </div>
        <ChatApp />
    </Node>
</Svelvet>

<style>
    .node {
        width: 100%;
        height: 100%;
        background-color: red;
        border-radius: 8px;
        border: 2px solid black;
    }
    .selected {
        border: 2px solid white;
    }
</style>
