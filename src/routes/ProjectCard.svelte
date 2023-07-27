<script>
	import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte';
	import FaFigma from 'svelte-icons/fa/FaFigma.svelte';
	import IoIosArrowForward from 'svelte-icons/io/IoIosArrowForward.svelte';
</script>

<div
	class="bg-base-200 dark:bg-secondary-content border-neutral-focus border-2 rounded-xl p-3 md:p-5
  flex flex-col md:flex-row gap-5"
>
	<div class="flex flex-col justify-between">
		<div>
			<h1 class="text-2xl tracking-wide font-bold mb-2">Project 1</h1>
			<p class="text-lg font-light">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente molestias veritatis ut
				quia nobis totam optio quos commodi suscipit voluptatibus soluta nostrum molestiae
				consectetur et, maxime, earum pariatur sed. Nisi!
			</p>

			<div class="text-sm my-3 flex flex-wrap gap-2">
				<span class="rounded bg-neutral-focus py-1 px-2">React</span>
				<span class="rounded bg-neutral-focus py-1 px-2">Firebase</span>
				<span class="rounded bg-neutral-focus py-1 px-2">Bootstrap</span>
				<span class="rounded bg-neutral-focus py-1 px-2">Algolia Search</span>
			</div>
		</div>

		<div class="flex flex-row gap-3 mt-6">
			<button class="btn"> View Site <span class="w-[24px]"><IoIosArrowForward /></span> </button>
			<button class="btn btn-circle p-1" title='View Code'> <IoLogoGithub /> </button>
			<button class="btn btn-circle p-2" title='View Design'> <FaFigma /> </button>
		</div>
	</div>

	<div class="flex items-center w-full">
		<img
			src="https://github.com/joseito-terence/speedwagoan/raw/master/readme_images/394.jpg"
			alt="project 1"
		/>
	</div>
</div>
