<script>
	import { afterUpdate, createEventDispatcher } from 'svelte';
	import { twMerge } from 'tailwind-merge';

	/** @type {import('../lib/types').card_data} */
	export let card_data;

	/** @type {number} */
	export let card_index;

	/** @type {boolean} */
	export let disabled;

	let showContent = false;
	const dispatch = createEventDispatcher();

	afterUpdate(() => {
		if (showContent) {
			dispatch('contentLoaded');
		}
	});

	function clickToShow() {
		showContent = true;
		messageToParent();
	}

	function messageToParent() {
		if (card_data.isImage) {
			dispatch('message', {
				type: 'image',
				image_url: card_data.image_url
			});
			return;
		}

		dispatch('message', {
			type: 'hint',
			message: card_data.hint
		});
	}
</script>

<button
	on:click|once={clickToShow}
	class="border-2 w-40 h-20 border-black hover:shadow-sm disabled:border-gray-200 disabled:text-gray-200"
	{disabled}
>
	{#if !showContent}
		<h1 class="scroll-m-20 text-2xl font-semibold tracking-tight">{card_index}</h1>
	{:else if card_data.isImage}
		<img src={card_data.image_url} alt={card_data.hint} class="" />
	{:else}
		<div class="">
			<div>{card_data.hint}</div>
		</div>
	{/if}
</button>
