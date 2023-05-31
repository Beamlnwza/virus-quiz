<script>
	let index_array = [...Array(5).keys()].map((item) => ({ id: item }));

	/**
	 * @param {number} index
	 */
	function getQuestionUrl(index) {
		return `./question/${index}`;
	}
</script>

<svelte:head>
	<title>main!</title>
</svelte:head>

<div class="flex h-screen w-screen justify-center items-center flex-col gap-4 absolute z-10">
	<h1 class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Virus quiz!!</h1>
	<img src="https://i.postimg.cc/Y9qDPTMP/ZB47hEKv.png" class="aspect-auto h-64" alt="qrcode" />
	<p class="leading-7 [&:not(:first-child)] text-red-700 font-bold text-xl">
		ไม่รองรับกับ โทรศัพท์ เพราะขี้เกียจทำ responsive
	</p>
	<p class="leading-7 [&:not(:first-child)]">please select question!</p>
	<div class="flex gap-5">
		{#each index_array as { id }}
			<a
				class="hover:underline scroll-m-20 text-xl font-semibold tracking-tight border-2 border-black p-2 rounded-md"
				href={getQuestionUrl(id)}>{id}</a
			>
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
