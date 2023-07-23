<script>
	import IoIosMail from 'svelte-icons/io/IoIosMail.svelte';
	import IoIosCall from 'svelte-icons/io/IoIosCall.svelte';
	import IoLogoGithub from 'svelte-icons/io/IoLogoGithub.svelte';
	import IoLogoTwitter from 'svelte-icons/io/IoLogoTwitter.svelte';
	import IoLogoLinkedin from 'svelte-icons/io/IoLogoLinkedin.svelte';
	import IoIosPaperPlane from 'svelte-icons/io/IoIosPaperPlane.svelte';

	const socials = [
		{ name: 'Github', link: 'https://github.com/joseito-terence', icon: IoLogoGithub },
		{ name: 'Twitter', link: 'https://twitter.com/joseito_terence', icon: IoLogoTwitter },
		{ name: 'LinkedIn', link: 'https://twitter.com/joseito_terence', icon: IoLogoLinkedin }
	];
</script>

<footer id='contact' class="bg-base-200 flex justify-center items-center">
	<div
		class="flex flex-col md:flex-row w-full md:w-[700px] md:m-3 bg-neutral-focus md:rounded-xl overflow-hidden"
	>
		<div class="w-full md:w-[270px] bg-secondary-content md:rounded-e-xl p-5 flex flex-col justify-between">
      <div>
        <h1 class="text-3xl font-bold">Contact</h1>
        <p class="text-xl font-light mb-9 tracking-wide">Any questions or remarks? Just write me a message</p>
      </div>

			<div>
				<a href="mailto:joseito.terence@gmail.com" class="flex items-center gap-1">
					<div class="w-[32px] h-[32px]">
						<IoIosMail />
					</div>
					<span>joseito.terence@gmail.com</span>
				</a>

				<a href="tel:+919637352760" class="flex items-center gap-1">
					<div class="w-[32px] h-[32px]">
						<IoIosCall />
					</div>
					<span>+91 9637352760</span>
				</a>

				<div class="flex flex-row gap-2 mt-2">
					{#each socials as social}
						<a href={social.link} title={social.name} class="w-[28px] h-[28px] inline-block">
							<svelte:component this={social.icon} />
						</a>
					{/each}
				</div>
			</div>
		</div>
		<div class="flex-1 p-4">
			<div class="form-control w-full">
				<label for="name" class="label">
					<span class="label-text font-bold">Name</span>
				</label>
				<input type="text" id="name" class="input input-bordered w-full" />
			</div>

			<div class="form-control w-full">
				<label for="message" class="label">
					<span class="label-text font-bold">Message</span>
				</label>
				<textarea id="message" class="textarea textarea-bordered" />
			</div>

			<button class="btn mt-7 float-right">
				<div class="w-[25px] h-[25px]">
					<IoIosPaperPlane />
				</div>
				Send Message
			</button>
		</div>
	</div>
</footer>
