<script>
	import ProjectCard from "./ProjectCard.svelte";

</script>
<section id="projects" class="relative overflow-hidden">
	<div
		class="text-neutral/5 dark:text-neutral-content/5
    font-extrabold text-[12rem] leading-none tracking-widest uppercase
    w-[110%] absolute ms-[-3%] select-none"
	>projects</div>

	<div class="container my-6">
		<h1 class="font-bold uppercase tracking-widest text-3xl relative py-9 my-5">Projects</h1>

    <div class="mt-10 flex flex-col gap-4">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
	</div>
</section>
