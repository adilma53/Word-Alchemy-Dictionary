<script>
	/** @type {import('./$types').LayoutData} */
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	import '../app.css';
	import { Navbar } from '$lib';
	import { DEngine } from '$lib';

	inject({ mode: dev ? 'development' : 'production' });

	export let data;

	const responsive = 'md:w-[700px] md:mx-auto lg:w-[700px] lg:mx-auto rounded-lg';
</script>

<header>
	<Navbar user={data.user} />
</header>

<div class="{responsive} m-3 border border-red-300">
	<slot />
</div>
