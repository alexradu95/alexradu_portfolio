import { writable, readable } from "svelte/store";

import ChatApp from "$lib/apps/ChatApp/ChatApp.svelte";

export let openedApps = writable([]);

export let availableApps = readable([
    {
        id: "Chat",
        component: ChatApp,
        icon: "✋"
    }
])