<script>
	// @ts-nocheck
	import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte';
	import FaFigma from 'svelte-icons/fa/FaFigma.svelte';
	import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte';
	import { inview } from 'svelte-inview';
	import { fly } from 'svelte/transition';

	/**
	 * @type {{ title: string; description: string; tags: string[]; links: { site?: string; github?: string; figma?: string; }; image: string; }}
	 */
	export let project;

	let isInView = false;
	const options = { unobserveOnEnter: true, treshold: 0.5 };
</script>

<div
	use:inview={options}
	on:inview_change={({ detail }) => (isInView = detail.inView)}
	class="min-h-[100px] group/card"
>
	{#if isInView}
		<div
			transition:fly={{ y: 70, duration: 500, delay: 300 }}
			class="bg-base-200 dark:bg-secondary-content border-neutral-focus border-2 rounded-xl p-3 md:p-5
  		flex flex-col md:flex-row gap-5 group-even/card:md:flex-row-reverse"
		>
			<div class="flex flex-col justify-between flex-1">
				<div>
					<h1 class="text-2xl tracking-wide font-bold mb-2">{project.title}</h1>
					<p class="text-lg font-light">
						{project.description}
					</p>

					<div class="text-sm my-3 flex flex-wrap gap-2 text-white dark:text-white/70">
						{#each project.tags as tag}
							<span class="rounded bg-neutral-focus py-1 px-2">{tag}</span>
						{/each}
					</div>
				</div>

				<div class="flex flex-row gap-3 mt-6 justify-between md:justify-normal">
					{#if project.links?.site}
						<a href={project.links.site} target="_blank">
							<button class="btn group/site">
								View Site 
								<span class="w-[24px] h-[24px] relative transition-all group-hover/site:translate-x-1">
									<span class="w-[15px] h-[2px] opacity-0 rounded absolute top-[46%] right-[40%] 
										group-hover/site:opacity-100 transition-all
										bg-[hsl(var(--bc)_/_var(--tw-text-opacity))]" />
									<IoIosArrowForward />
								</span>
							</button>
						</a>
					{/if}

					<div class="flex flex-row gap-3">
						{#if project.links?.github}
							<div class="tooltip" data-tip="View Code">
								<a href={project.links.github} target="_blank" class="btn btn-circle p-1">
									<IoLogoGithub />
								</a>
							</div>
						{/if}

						{#if project.links?.figma}
							<div class="tooltip" data-tip="View Design">
								<a href={project.links.figma} target="_blank" class="btn btn-circle p-2">
									<FaFigma />
								</a>
							</div>
						{/if}
					</div>
				</div>
			</div>

			<div class="flex items-center w-full md:w-[325px]">
				<img class="rounded" src={project.image} alt={project.title} />
			</div>
		</div>
	{/if}
</div>

