<script>
	import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte';
	import FaFigma from 'svelte-icons/fa/FaFigma.svelte';
	import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte';
	/**
	 * @type {{ title: any; description: any; tags: any; links: { site: any; github: any; figma: any; }; image: any; }}
	 */
	 export let project;
</script>

<div
	class="bg-base-200 dark:bg-secondary-content border-neutral-focus border-2 rounded-xl p-3 md:p-5
  flex flex-col md:flex-row gap-5"
>
	<div class="flex flex-col justify-between">
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

		<div class="flex flex-row gap-3 mt-6">
			{#if project.links.site}
				<a href={project.links.site}>
					<button class="btn"> View Site <span class="w-[24px]"><IoIosArrowForward /></span> </button>
				</a>
			{/if}
			
			{#if project.links.github}
				<a href={project.links.github}>
					<button class="btn btn-circle p-1" title='View Code'> <IoLogoGithub /> </button>
				</a>
			{/if}

			{#if project.links.figma}
				<a href={project.links.figma}>
					<button class="btn btn-circle p-2" title='View Design'> <FaFigma /> </button>
				</a>
			{/if}
		</div>
	</div>

	<div class="flex items-center w-full">
		<img
			src={project.image}
			alt={project.title}
		/>
	</div>
</div>
