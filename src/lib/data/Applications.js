import { writable, readable } from "svelte/store";

import GodotWrapper from '$lib/apps/GodotWrapper.svelte';
import ExperienceApp from '$lib/apps/experience/ExperienceApp.svelte';
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
        component: ExperienceApp,
        icon: "🧠"
    },
    {
        id: "Godot",
        component: GodotWrapper,
        icon: "🧿"
    }
])