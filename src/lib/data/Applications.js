import { writable, readable } from "svelte/store";

import About from '$lib/apps/About.svelte';
import Experience from '$lib/apps/Experience.svelte';

export let openedApps = writable([]);

export let availableApps = readable([
    {
        id: "About",
        component: About,
        icon: "✋"
    },
    {
        id: "Experience",
        component: Experience,
        icon: "🧠"
    }
])