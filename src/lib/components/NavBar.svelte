<script>
    import Logo from '$lib/assets/logo.svg';
    import routes from '$lib/data/NavRoutes';

    export let segment;
</script>

<nav class="dark:bg-black">
    <div class="flex items-center justify-between mx-auto p-4">
        <a href="/" class="hidden md:block">
            <img src={Logo} alt="logo" class="cursor-pointer h-8 w-8" />
        </a>
        <div class="w-full md:flex md:items-center md:w-auto">
            <ul class="font-medium flex flex-col space-y-4 md:flex-row md:space-x-8 md:space-y-0">
                {#each routes as route}
                    <li>
                        <a
                            href="{route.href}"
                            class={`block px-4 py-2 text-white rounded-md text-lg font-mono md:bg-transparent md:px-2 md:py-1 dark:text-white md:dark:text-blue-500 ${
                                segment === route.href ? 'bg-blue-700 active-link' : ''
                            }`}
                            aria-current="page"
                        >
                            {#if route.emoticon}
                                <span class={segment === route.href ? 'glowing-emoticon' : ''}>
                                    {route.emoticon}
                                </span>
                            {/if}
                            {route.label}
                        </a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>

<style>
    .glowing-emoticon {
        animation: glowing 2s ease-in-out infinite;
    }

    @keyframes glowing {
        0% {
            opacity: 1;
        }

        50% {
            opacity: 0.5;
        }

        100% {
            opacity: 1;
        }
    }

    .active-link {
        background-color: #1f2937;
        color: #60a5fa;
    }
</style>
