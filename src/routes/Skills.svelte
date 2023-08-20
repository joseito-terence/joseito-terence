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
	import { fly } from 'svelte/transition';
	import { onMount } from 'svelte';

	/**
	 * @type {any[]}
	 */
	let skills = [];

	onMount(() => {
		skills = [
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
	});
</script>

<!-- md:rotate-12 md:translate-x-[10%] md:translate-y-[-35%] -->
<div
	class="bg-neutral relative p-3
	min-h-[124px] md:min-h-[400vh]
  rotate-0 translate-x-0 translate-y-0
	skills
	"
>
	<div
		class="flex
    md:grid md:grid-cols-2 gap-3
    animate-slideX md:animate-slideY hover:animate-pause"
	>
		{#each skills as { name, icon }, i}
			<div
				class="min-w-[100px] bg-base-100 dark:bg-base-content flex justify-center items-center flex-col rounded-md aspect-square gap-3"
				transition:fly={{ y: 10 * i, duration: 1000 }}
			>
				<div>
					<svelte:component this={icon} />
				</div>
				<div>
					<h3 class="text-sm md:text-md text-neutral font-medium tracking-wider uppercase">
						{name}
					</h3>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.skills {
		transition: all;
		animation: smooth 1s ease-in forwards;
	}
	
	@keyframes smooth {
		0% {
			transform: translateX(0);
			width: 100%;
		}
		100% {
			transform: translateX(-165px) rotateX(6deg) rotateZ(6deg) rotateY(-33deg);
			width: 118%;
		}
	}
</style>
