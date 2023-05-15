<script>
    import Burger from './Hamburger.svelte';
    import Logo from '$lib/assets/logo.svg';
    let opened = false;
    export let segment;

    const routes = [
        {
            href: '/',
            label: 'Home 🏠'
        },
        {
            href: '/experience',
            label: 'Experience 🧠'
        },
        {
            href: '/about',
            label: 'About 🙋🏽‍♂️'
        },
        {
            href: '/3d-experiments',
            label: '3D Experiments 🧿'
        }
    ];
</script>

<div class="{opened ? 'flex-col items-center h-330 transition-height duration-200' : 'flex flex-col'} NavBar">
    <div class="innerContainer">
        <a href="/">
            <img src={Logo} alt="logo" class="cursor-pointer h-8 w-8" />
        </a>
        <div class="burger">
            <Burger bind:open={opened} />
        </div>
        <div class="buttons">
            {#each routes as route}
                <a class="button {segment === route.href ? 'selected' : ''}" href={route.href}>{route.label}</a>
            {/each}
        </div>
    </div>
    <div class="responsiveButtons buttons">
        {#each routes as route}
            <a class="button {segment === route.href ? 'selected' : ''}" href={route.href}>{route.label}</a>
        {/each}
    </div>
</div>
