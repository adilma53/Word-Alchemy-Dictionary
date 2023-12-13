<script>
	export let isNavOpen = false;
	export const closeNavBar = () => {
		isNavOpen = false;
		console.log('fromnavbutton: ', isNavOpen);
	};

	export let mobile;
	let mobileStyle = mobile ? 'w-1/2 flex flex-col' : '';
</script>

<button
	on:click={closeNavBar}
	class="{mobileStyle} hover:text-white dark:border-blue-500/30 border-2 border-blue-500/30 dark:bg-blue-500/30 bg-blue-500/60 hover:bg-blue-700 dark:hover:bg-blue-700 text-base font-bold py-1 px-2 rounded"
>
	<a href="/login">Log in</a>
</button>
<button
	on:click={closeNavBar}
	class="{mobileStyle} hover:text-white dark:bg-blue-500/30 border-2 border-blue-700 bg-transparent hover:bg-blue-700 dark:hover:bg-blue-700 text-base font-bold py-1 px-2 rounded"
>
	<a href="/register">Sing Up</a>
</button>
