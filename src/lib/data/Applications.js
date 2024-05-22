import { writable, readable } from "svelte/store";

import Welcome from '$lib/apps/Welcome.svelte';
import ChatApp from "$lib/apps/ChatApp/ChatApp.svelte";

export let openedApps = writable([]);

export let availableApps = readable([
    {
        id: "Welcome",
        component: Welcome,
        icon: "✋"
    },
    {
        id: "Chat",
        component: ChatApp,
        icon: "✋"
    }
])