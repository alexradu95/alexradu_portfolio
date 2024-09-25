import { writable, readable } from "svelte/store";

import GodotWrapper from '$lib/components/apps/GodotWrapper.svelte';
import ExperienceApp from '$lib/components/apps/experience/ExperienceApp.svelte';
import Welcome from '$lib/components/apps/Welcome.svelte';
import WebsiteStatus from '$lib/components/apps/WebsiteStatus.svelte'

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
        id: "ChangeLog",
        component: WebsiteStatus,
        icon: "📝"
    },
    {
        id: "Godot",
        component: GodotWrapper,
        icon: "🧿"
    }
])