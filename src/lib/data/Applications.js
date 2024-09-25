import { writable, readable } from "svelte/store";
import { ExperienceApp, GodotWrapper, WebsiteStatus, Welcome, About } from "../components/apps/index.js";


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
        id: "About",
        component: About,
        icon: "🧿"
    }
])