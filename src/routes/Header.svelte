<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/JTF.png';
</script>

<header class="bg-base/95 border-b-[0.2px] border-b-neutral-700 fixed top-0 left-0 right-0">
	<div class="container flex flex-row items-center">
		<div class="flex-1">
			<div class="w-[40px] h-[40px] rounded-full bg-slate-300 flex justify-center items-center">
				<img src={logo} alt="JTF" class="object-contain scale-[1.3] ms-[4px]" />
			</div>
		</div>

		<nav class="flex-none flex justify-center items-center gap-4 sm:gap-8 font-medium">
			<a href="/">Home</a>
			<a href="#projects">Projects</a>
			<a href="#contact">Contact</a>
			<input type="checkbox" class="toggle" checked />
		</nav>
	</div>
</header>
