<script>
	import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte';
	import FaFigma from 'svelte-icons/fa/FaFigma.svelte';
	import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte';
	/**
	 * @type {{ title: string; description: string; tags: string[]; links: { site?: string; github?: string; figma?: string; }; image: string; }}
	 */
	export let project;
</script>

<div
	class="bg-base-200 dark:bg-secondary-content border-neutral-focus border-2 rounded-xl p-3 md:p-5
  flex flex-col md:flex-row gap-5 md:odd:flex-row-reverse"
>
	<div class="flex flex-col justify-between flex-1">
		<div>
			<h1 class="text-2xl tracking-wide font-bold mb-2">{project.title}</h1>
			<p class="text-lg font-light">
				{project.description}
			</p>

			<div class="text-sm my-3 flex flex-wrap gap-2">
				{#each project.tags as tag}
					<span class="rounded bg-neutral-focus py-1 px-2">{tag}</span>
				{/each}
			</div>
		</div>

		<div class="flex flex-row gap-3 mt-6 justify-between md:justify-normal">
			{#if project.links?.site}
				<a href={project.links.site} target="_blank">
					<button class="btn">
						View Site <span class="w-[24px]"><IoIosArrowForward /></span>
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
