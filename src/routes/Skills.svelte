<script>
	import React from '$lib/icons/react.svelte';
	import Sass from '$lib/icons/sass.svelte';
	import Javascript from '$lib/icons/javascript.svelte';
	import CSS from '$lib/icons/css3.svelte';
	import Nextjs from '$lib/icons/nextjs.svelte';
	import Docker from '$lib/icons/docker.svelte';
	import Git from '$lib/icons/git.svelte';
	import Database from '$lib/icons/database.svelte';
	import Tailwind from '$lib/icons/tailwind.svelte';
	import Typescript from '$lib/icons/typescript.svelte';

	let skills = [
		{ name: 'React', icon: React },
		{ name: 'Sass', icon: Sass },
		{ name: 'Javascript', icon: Javascript },
		{ name: 'CSS', icon: CSS },
		{ name: 'Tailwind', icon: Tailwind },
		{ name: 'Typescript', icon: Typescript },
		{ name: 'NextJS', icon: Nextjs },
		{ name: 'Docker', icon: Docker },
		{ name: 'Git', icon: Git },
		{ name: 'Database', icon: Database }
	];
	skills = [...skills, ...skills];
</script>

<div
	class="bg-neutral relative p-3
  rotate-0 translate-x-0 translate-y-0
  md:rotate-12 md:translate-x-[10%] md:translate-y-[-10%]"
>
	<div
		class="flex
    md:grid md:grid-cols-2 gap-3
    animate-slideX md:animate-slideY hover:no-animation"
	>
		{#each skills as { name, icon }}
			<div
				class="min-w-[100px] bg-base-100 dark:bg-base-content flex justify-center items-center flex-col rounded-md aspect-square gap-3"
			>
				<div>
					<svelte:component this={icon} />
				</div>
				<div>
					<h3 class="text-sm md:text-md text-neutral font-medium tracking-wider uppercase">{name}</h3>
				</div>
			</div>
		{/each}
	</div>
</div>
