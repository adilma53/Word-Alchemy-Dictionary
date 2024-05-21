<script>
	import AudioIcon from '$lib/assets/audio.svg';
	import { dictionaries } from '$lib/data';

	export let data;

	const { user, myCollections } = data;
	console.log('🚀 ~ myCollections:', myCollections);

	$: phonetic = data?.phonetics;
	$: wordefine = data?.word;
	$: audioSource = data?.phonetics.audio;

	let showDropdown = false;
	let selectedCollection = null;

	const playaudio = () => {
		if (audioSource) {
			const audio = new Audio(audioSource);
			audio.play();
		} else {
			alert('No audio available for this word');
		}
	};

	// const addWordToCollection = async (collectionId) => {
	// 	try {
	// 		const response = await fetch('/api/words', {
	// 			method: 'POST',
	// 			headers: {
	// 				'Content-Type': 'application/json'
	// 			},
	// 			body: JSON.stringify({ word: wordefine, collectionId })
	// 		});

	// 		console.log('🚀 ~ addWordToCollection ~ response:', response);

	// 		if (response.ok) {
	// 			alert('Word added to collection successfully');
	// 		} else {
	// 			alert('Failed to add word to collection');
	// 		}
	// 	} catch (error) {
	// 		console.error('Error adding word to collection:', error);
	// 		alert('Error adding word to collection');
	// 	}
	// };

	const addWord = async (collectionID, newWordName) => {
		try {
			const response = await fetch(`/api/words`, {
				method: 'POST',
				body: JSON.stringify({ name: newWordName, id: collectionID })
			});

			if (response.ok) {
				const collection = await response.json();
				console.log('🚀 ~ addWord ~ newWord:', collection);
				console.log('🚀 ~ addWord ~ newWordName:', newWordName);

				// collection.isCollectionWordsOpen = true;
				// collections[collectionIndex] = newWord;
				// collections = [...collections];
			} else {
				console.error('Failed to create word');
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleCollectionSelect = (collectionId, newWordName) => {
		addWord(collectionId, newWordName);
		showDropdown = false;
	};
</script>

<section class="@container flex flex-col">
	<!-- * top container -->
	{#if data}
		<div class="flex md:items-baseline p-10 flex-col">
			<div class="w-full flex justify-between">
				<h1 class="text-5xl font-bold">
					{wordefine}
				</h1>

				<div class="relative">
					<button
						class="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
						on:click={() => (showDropdown = !showDropdown)}>Add To</button>
					{#if showDropdown}
						<div
							class=" dark:border-slate-800 absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
							{#each myCollections as collection}
								<button
									class=" w-full px-4 py-2 text-left dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-gray-700"
									on:click={() => handleCollectionSelect(collection.id, wordefine)}>
									{collection.name}
								</button>
							{/each}
						</div>
					{/if}
				</div>
			</div>
			<div class="flex flex-row">
				<button on:click={playaudio}>
					<img src={AudioIcon} alt="Audioicon" class="h-7 w-7" />
				</button>
				<em class="font-normal text-base text-blue-600 mx-3 my-3">{phonetic.text}</em>
			</div>
			{#each data.meanings as meaning}
				<div class="w-full pt-5 flex flex-row justify-end">
					<h1 style="white-space: nowrap;" class="flex font-bold md:text-2xl italic text-xl">
						{meaning.partOfSpeech}
					</h1>
					<hr class="w-full mx-3 border-1 border-blue-300 my-4" />
				</div>

				<div class="w-full">
					<h2 class="md:text-2xl pt-4 text-base font-semibold italic">Meaning</h2>
					<ul
						class="pt-5 text-sm md:text-base marker:text-blue-600 font-medium list-disc list-outside">
						{#each meaning.definitions as def}
							<li class="w-fit text-base my-2 text-start leading-relaxed">
								{def.definition}
								{#if def.example}
									<p class="text-base text-blue-800/90 dark:text-gray-500 italic pt-3">
										{def.example}
									</p>
								{/if}
							</li>
						{/each}
					</ul>
					<!-- ! Synonyms -->
					<div class="flex flex-col space-y-4">
						<div>
							{#if meaning.synonyms}
								<h2 class="text-base text-gray-400 font-semibold">Synonyms</h2>
								<div class="text-base font-medium text-blue-700">
									{meaning.synonyms}
								</div>
							{/if}
						</div>
						<div>
							{#if meaning.antonyms}
								<h2 class="text-base text-gray-400 font-semibold">Antonyms</h2>
								<span class="text-base font-medium text-blue-700">{meaning.antonyms}</span>
							{/if}
						</div>
					</div>
				</div>
			{/each}
			<!-- sources -->
			<div class="w-full pt-5 flex flex-row justify-between">
				<h1 class="font-bold md:text-2xl italic text-xl">Sources</h1>
				<hr class="w-full mx-3 border-1 border-blue-300 my-4" />
			</div>
			<div class="flex flex-row pt-3 space-x-3">
				{#each dictionaries as { name, imageurl, wordlink }}
					<a href={wordlink + wordefine} target="_blank">
						<img src={imageurl} alt={name} class="w-10 h-10 rounded-full" />
					</a>
				{/each}
			</div>
		</div>
	{:else}
		<div class="pt-10">
			<h1 class="text-center justify-center flex text-4xl text-red-600">
				No definition for the word: <b>{wordefine}</b>
			</h1>
		</div>
	{/if}
</section>
