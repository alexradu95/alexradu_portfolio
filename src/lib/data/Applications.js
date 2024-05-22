import { writable, readable } from "svelte/store";

import Welcome from '$lib/apps/Welcome.svelte';

export let openedApps = writable([]);

export let availableApps = readable([
    {
        id: "Welcome",
        component: Welcome,
        icon: "✋"
    }
])