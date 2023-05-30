import { writable, readable } from "svelte/store";

import About from '$lib/apps/About.svelte';
import Experience from '$lib/apps/Experience.svelte';
import Welcome from '$lib/apps/Welcome.svelte';

export let openedApps = writable([]);

export let availableApps = readable([
    {
        id: "Welcome",
        component: Welcome,
        icon: "✋"
    },
    {
        id: "Experience",
        component: Experience,
        icon: "🧠"
    }
])