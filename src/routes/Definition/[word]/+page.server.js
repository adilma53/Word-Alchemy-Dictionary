import { prisma } from '../../../lib/server/prisma.js';
import { cleanarray, capturebestphonetics } from './funchelper.js';
import { error } from '@sveltejs/kit';

export async function load({ fetch, params, locals }) {
	let { word } = params;
	try {
		// Make the API request heres
		let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
		let data = await response.json();
		const myword = data[0]['word'];

		const phoneticsArray = capturebestphonetics(data[0]['phonetics'], data[0]['phonetic']);
		const MeaningArray = data[0]['meanings'].map((meaning) => {
			return cleanarray(meaning);
		});

		// if (!phoneticsArray['text'] && data[0]['phonetic']) {
		// 	phoneticsArray['text'] = data[0]['phonetic'];
		// }

		console.log('from server phonetics --->', phoneticsArray);
		console.log('for server meaning --->', MeaningArray);

		const myCollections = await prisma.collection.findMany({
			where: { userId: locals?.user?.id },
			include: {
				words: true
			}
		});

		return {
			word: myword,
			phonetics: phoneticsArray,
			meanings: MeaningArray,
			user: locals.user,
			myCollections
		};
	} catch (e) {
		throw error(404, 'Not found');
	}
}
