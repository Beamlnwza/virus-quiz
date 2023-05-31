<script>
	import { page } from '$app/stores';
	import quiz_list from '../../../data/quiz';
	import Card2 from '../../../components/Card2.svelte';
	import { shuffle } from '../../../lib/shuffle';
	import troll_items, { correct_items } from '../../../data/troll';

	/** @type {number} */
	let question_index = parseInt($page.params.index);
	$: question_data = quiz_list[question_index];
	$: shuffled_data = shuffle(question_data.questions);
	let troll_imgs = '';

	/** @type {string} */
	let showAnswerText = '';

	/** @type {string[]} */
	let showHint = [];

	/** @type {boolean} */
	let trolled = false;

	/** @type {boolean} */
	let showAll = false;

	/** @param {CustomEvent<any>} e
	 *  @returns {Promise<void>}
	 */
	const showHintHandler = async (e) => {
		e.preventDefault();
		if (e.detail.hint === 'trolled') {
			showAnswerText = 'You have been trolled!';
			trolled = true;
			troll_imgs = troll_items[question_index];
			return;
		}

		showAnswerText = e.detail.hint;
		trolled = false;
	};

	const showAnswer = () => {
		showAll = true;
		showAnswerText = question_data.virus_name;
		trolled = true;
		troll_imgs = correct_items[question_index];
	};
</script>

<svelte:head>
	<title>{question_index}</title>
</svelte:head>

<div class="grid grid-cols-[2fr_1.5fr] h-screen absolute z-10">
	<div class="col-start-1 col-end-1 flex justify-center items-center flex-col">
		{#if trolled}
			<div class="w-[30rem] flex justify-center items-center">
				<img src={troll_imgs} alt="you've been trolled" class="aspect-auto" />
			</div>
		{/if}
		<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center p-2">
			{showAnswerText}
		</h1>
		<div class="flex flex-col gap-2">
			<a class="border-2 border-black p-2 hover:underline" href="../">Go Back to Home page</a>
			<button class="border-2 border-black p-2 hover:underline" on:click|once={showAnswer}
				>Show the Answer!</button
			>
		</div>
	</div>
	<div class="col-start-2 col-end-2 flex justify-center items-center gap-3 flex-wrap flex-row">
		{#each shuffled_data as item, i}
			<Card2
				card_data={item}
				question_index={i}
				on:message={showHintHandler}
				showContent={showAll}
			/>
		{/each}
	</div>
</div>
<div class="bg-patterns h-screen w-screen absolute z-0" />

<style>
	.bg-patterns {
		background-color: #fff;
		background-image: linear-gradient(
				90deg,
				transparent 79px,
				#abced4 79px,
				#abced4 81px,
				transparent 81px
			),
			linear-gradient(#eee 0.1em, transparent 0.1em);
		background-size: 100% 1.2em;
	}
</style>
