<script>
	import { onMount } from 'svelte';
	import Skills from './Skills.svelte';
	import { fly } from 'svelte/transition';
	let showText = false;

	onMount(() => {
		showText = true;
	});
</script>

<section id="home" class="flex flex-row overflow-hidden h-screen">
	<div class="container flex flex-col md:flex-row">
		<div
			class="min-h-[77vh] h-screen flex-1 flex flex-col justify-center relative
		after:content-['Software_Developer'] after:ml-0.5 after:text-neutral/5 dark:after:text-neutral-content/5
		after:font-extrabold after:text-[10rem] after:leading-none after:tracking-wide
		after:absolute after:left-[-50%]"
		>
			{#if showText}
				<div transition:fly={{ y: 10, duration: 1000 }}>
					<h1 class="text-6xl sm:text-7xl font-bold dark:text-white">Hi, <span class="whitespace-nowrap">I'm Joseito</span></h1>
					<h2 class="text-4xl md:text-5xl font-medium text-neutral/80 dark:text-neutral-content/70">
						Software Developer
					</h2>
				</div>
			{/if}
		</div>

		<div class="flex-1" style="perspective: 1000px">
			<Skills />
		</div>
	</div>
</section>
