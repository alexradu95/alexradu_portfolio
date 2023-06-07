import { writable, readable } from "svelte/store";

import GodotWrapper from '$lib/apps/GodotWrapper.svelte';
import ExperienceApp from '$lib/apps/experience/ExperienceApp.svelte';
import Welcome from '$lib/apps/Welcome.svelte';
import WebsiteStatus from '$lib/apps/WebsiteStatus.svelte'
import Orillusion from '$lib/apps/Orillusion.svelte'

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
    },
    {
        id: "Orillusion",
        component: Orillusion,
        icon: "👁️"
    }
])