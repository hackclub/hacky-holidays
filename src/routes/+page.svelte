<script>
	import { onMount } from 'svelte';
	import FAQCard from '$lib/components/FAQCard.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Model from '$lib/components/App.svelte';
	let isClient = false;

	onMount(() => {
		isClient = true;
	});

	let faqs = [
		{
			question: 'What are the first steps?',
			answer:
				"After deciding on the theme or holiday of your PCB, start brainstorming possible features and ideas for it. We'll help you along the way by providing guidance through Slack huddles and with our guide to use as a reference schematic."
		},
		{
			question: 'When is submission deadline?',
			answer:
				'The hard deadline is January 20th, but we recommend submitting much earlier to get your PCB before then!'
		},
		{
			question: 'What about the OnBoard Grant?',
			answer:
				'You can still apply for the OnBoard grant, but you cannot receive two grants for the same PCB design.'
		},
		{
			question: 'What programs can I use to make my PCB?',
			answer:
				'We allow both KiCad and EasyEDA projects, however we strongly recommend people submit with KiCad. As a bonus, check out the KiCad-Wakatime plugin to earn doubloons for High Seas.'
		},
		{
			question:
				'What if my PCB is complex, and features a large variety of components or requires Standard Assembly?',
			answer:
				'A limited handful of people will be eligible to have their PCB hand soldered by a Hack Club staff member. You can apply for it on a form. Apply here for the service.'
		},
		{
			question: 'How do I submit my design?',
			answer:
				'Submit your design via a pull request (PR) to the OnBoard repository before the deadline.'
		}
	];

	let images = [
		{
			src: '/images/schematic.png',
			alt: 'Design a PCB',
			title: 'Design a PCB',
			description: 'Create your own custom PCB design.'
		},
		{
			src: '/images/pcb-view.png',
			alt: 'Design Art',
			title: 'Design Art',
			description: 'Add artistic elements to your PCB.'
		},
		{
			src: '/images/code.png',
			alt: 'Create Firmware',
			title: 'Create Firmware',
			description: 'Develop the firmware for your PCB.'
		}
	];
</script>

<link rel="icon" href="https://assets.hackclub.com/icon-rounded.svg" />

<div
	class="relative z-0 grid gap-0 bg-gradient-to-b from-[rgba(0,153,255,1)] to-[rgba(130,205,255,1)] md:h-[100%]"
>
	<div class="absolute left-0 top-0">
		<a href="https://hackclub.com" target="_blank" rel="noopener noreferrer">
			<button>
				<img
					src="https://assets.hackclub.com/flag-orpheus-top.svg"
					class="h-20"
					alt="Hack Club Flag"
				/>
			</button>
		</a>
	</div>

	<div
		class="mx-auto mb-8 flex w-full flex-col items-center justify-center gap-4 border-b-4 bg-[url('https://cloud-clj0ujnpv-hack-club-bot.vercel.app/0image.png')] bg-cover bg-center bg-no-repeat pr-0 pt-[10vh] sm:h-[120vh] md:h-[95vh] md:flex-row md:pr-12 md:pt-0"
	>
		{#if isClient}
			<Model />
		{/if}
		<!-- Right Column: Text -->
		<div class="ml-0 flex w-full max-w-[60%] flex-col items-start md:ml-[2vw] md:w-[65%]">
			<h1
				class="text-center text-[2.8rem] font-bold text-white [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] md:text-left md:text-[7rem]"
			>
				Hacky Holidays!
			</h1>
			<h2
				class="text-[0.7rem] font-bold text-white [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] md:-mt-4 md:text-[1.9rem]"
			>
				Design a holiday themed PCB this Winter, and get it shipped
			</h2>
			<a href="/guide">
				<button
					class="mx-auto mb-10 mt-4 rounded-[2rem] bg-[#f76f63] px-4 py-2 text-center align-middle text-[0.8rem] font-bold text-white [text-shadow:_0_4px_4px_rgb(0_0_0_/_25%)] md:mx-0 md:px-8 md:py-4 md:text-[calc(0.6vw+0.6vh)]"
				>
					<b>&nbsp;Learn to make a festive PCB &nbsp; ➜</b>
				</button>
			</a>
		</div>
	</div>

	<div class="md:px-18 pt-8 sm:px-8 lg:px-[9rem]">
		<div class="flex flex-col items-center justify-center px-4 text-white md:px-20">
			<h3 class="font-inter text-lg font-bold drop-shadow-md md:text-2xl">
				This holiday season make a festive themed PCB design of one of the many holidays taking
				place, Christmas, New Years, Diwali, Hanukkah, or others! Design a PCB that commemorates and
				showcases your interest in electronics using LEDs, sensors and more. The PCB can be a
				decoration, a gift, or anything else you can think of!
				<br /><br />
				Your PCB can be as simple or as complex as you want, to help you get started we have some example
				designs and reference schematics location in our
				<a href="/guide" class="text-[#bae6fd] underline">guide</a>.
			</h3>
		</div>

		<div class="flex w-full items-center justify-center">
			<div
				class="resize-both mx-8 mt-20 grid min-h-[30vh] w-fit grid-cols-1 items-center justify-center gap-5 rounded-xl bg-black bg-opacity-30 p-8 px-12 text-center md:grid-cols-3"
			>
				{#each images as image}
					<div class="mx-4 flex flex-col items-center justify-center rounded-xl pt-0 md:pt-8">
						<h4 class="font-inter pb-5 text-lg font-extrabold text-white shadow-md md:text-2xl">
							{image.title}
						</h4>
						<div class="relative h-[26vh] w-[24vh] rounded-lg pb-8 md:h-[20vw] md:w-[18vw]">
							<img src={image.src} alt={image.alt} class="rounded-lg object-cover" />
						</div>
						<p class="font-inter mt-2 text-sm text-white md:text-base">
							{image.description}
						</p>
					</div>
				{/each}
			</div>
		</div>

		<div
			class="mx-auto flex w-full flex-col items-center justify-center gap-4 bg-transparent p-4 px-4 text-center text-lg font-semibold md:flex-row md:p-6 md:px-16 md:text-xl lg:p-8 lg:text-2xl"
		>
			<p class="font-inter mb-4 text-white md:text-left">
				Want something a little simplier to learn the basics, or just in need of some inspiration? <br
				/>Check out Hack Club Jams which you'll find amazing guides made by the community.
			</p>
			<a
				href="https://jams.hackclub.com/tag/pcb"
				class="inline-block justify-center rounded-lg bg-blue-500 bg-opacity-75 px-8 py-3 text-center align-middle text-base font-medium leading-6 text-white shadow transition hover:bg-blue-600 hover:bg-opacity-100 focus:outline-none focus:ring"
			>
				Hack Club Jams
			</a>
		</div>

		<div class="flex flex-col items-center justify-center px-8 text-white">
			<h2
				class="font-inter mb-4 text-center text-2xl font-extrabold text-white md:text-left md:text-3xl lg:text-4xl"
			>
				Frequently Asked Questions
			</h2>
			<div
				class="inherit-padding-right grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
				style="padding-right: inherit;"
			>
				{#each faqs as faq}
					<FAQCard question={faq.question} answer={faq.answer} />
				{/each}
			</div>
			<h2 class="font-inter mt-6 pb-8 text-lg font-bold md:text-3xl">
				Any more questions? Ask in <a
					href="https://hackclub.slack.com/archives/C083SK3G5D3"
					class="text-blue-500 underline">#hacky-holidays</a
				>!
			</h2>
		</div>
	</div>
</div>

<Footer />
