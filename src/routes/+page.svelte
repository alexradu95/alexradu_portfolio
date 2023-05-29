<script>
    import IconsList from "$lib/components/IconsList.svelte";
    import ThrelteLogo from "$lib/components/ThrelteLogo.svelte";
</script>

<svelte:head>
    <title>Alex Radu - Software Developer</title>
</svelte:head>

<div class="flex flex-col py-10 text-white mx-auto space-y-8">

    <p class="text-center text-3xl md:text-4xl font-bold">Hi! ✋</p>
    <h1 class="text-center text-3xl md:text-4xl font-bold">I'm Alex, a software engineer based in Romania 🌍</h1>
    <div class="container p-10 ">
      <ThrelteLogo></ThrelteLogo>
    </div>

    <h1 class="text-center text-3xl md:text-4xl font-bold">You can find me on the following websites</h1>
    <IconsList />
</div>
