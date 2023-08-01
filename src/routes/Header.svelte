<script lang="ts">
	import logo from '$lib/images/JTF.png';
	import { onMount } from 'svelte';

	// function toggleTheme() {
	// 	document.documentElement.dataset.theme =
	// 		document.documentElement.dataset.theme === 'light' ? 'night' : 'light';
	// }

	onMount(() => {
		const section = document.querySelectorAll('section, footer');

		const indicator = document.querySelector<HTMLElement>('#indicator');

		const options = {
			threshold: 0.1
		};

		let observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const id = entry.target.id;
				const activeAnchor = document.querySelector(`[data-page=${id}]`);
				const coords = activeAnchor?.getBoundingClientRect();

				if (coords) {
					const directions = {
						width: coords.width,
						top: coords.top,
						left: coords.left
					};

					if (entry.isIntersecting && indicator?.style) {
						indicator.style.setProperty('left', `${directions.left}px`);
						indicator.style.setProperty('bottom', `${directions.top}px`);
						indicator.style.setProperty('width', `${directions.width}px`);
					}
				}
			});
		}, options);

		section.forEach((section) => {
			observer.observe(section);
		});

		return () => observer.disconnect();
	});
</script>

<header
	class="border-b-[0.2px] border-b-neutral-700 fixed top-0 left-0 right-0 bg-base-100/95 z-[1000]"
>
	<div class="container flex flex-row items-center">
		<div class="flex-1">
			<div class="w-[40px] h-[40px] rounded-full bg-slate-300 flex justify-center items-center">
				<img src={logo} alt="JTF" class="object-contain scale-[1.3] ms-[4px]" />
			</div>
		</div>

		<nav class="flex-none flex justify-center items-center gap-4 sm:gap-8 font-medium uppercase">
			<a href="/" data-page="home">Home</a>
			<a href="#projects" data-page="projects">Projects</a>
			<a href="#contact" data-page="contact">Contact</a>
			<!-- <input type="checkbox" class="toggle" checked on:change={toggleTheme} /> -->
			<div
				id="indicator"
				class="absolute -z-[2] transition-all bg-neutral-focus dark:bg-neutral-content h-[2px]"
			/>
		</nav>
	</div>
</header>
