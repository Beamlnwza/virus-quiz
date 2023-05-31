<script>
	import { createEventDispatcher } from 'svelte';
	/** @type {import('../lib/types').card_data} */
	export let card_data;

	/** @type {number} */
	export let question_index;

	/** @type {boolean} */
	export let showContent = false;

	/** @param {MouseEvent} e
	 *  @returns {void}
	 */
	function showHintHandler(e) {
		e.preventDefault();
		showContent = !showContent;
		showHint();
	}

	const dispatch = createEventDispatcher();

	function showHint() {
		dispatch('message', {
			hint: card_data.hint
		});
	}
</script>

<button
	class="border-gray-700 w-72 h-48 border-2 hover:shadow-xl"
	on:click|preventDefault={showHintHandler}
	disabled={showContent}
>
	{#if showContent}
		<h2 class="scroll-m-20 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
			{card_data.hint}
		</h2>
	{:else}
		<h2 class="scroll-m-20 text-2xl font-semibold tracking-tight transition-colors first:mt-0">
			{question_index + 1}
		</h2>
	{/if}
</button>
