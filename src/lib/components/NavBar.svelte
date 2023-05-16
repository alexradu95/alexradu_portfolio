<script>
    import Logo from '$lib/assets/logo.svg';

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


<nav class="dark:bg-black">
	<div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/">
            <img src={Logo} alt="logo" class="cursor-pointer h-8 w-8" />
        </a>
	  <div class="w-full md:block md:w-auto" id="navbar-default">
		<ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
			{#each routes as route}
				<li>
					<a href="{route.href}" class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">{route.label}</a>
				</li>
			{/each}
		</ul>
	  </div>
	</div>
  </nav>

