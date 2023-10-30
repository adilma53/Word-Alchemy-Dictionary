export async function load({ fetch, params }) {
	let { word } = params;

	// Make the API request here
	let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
	let data = await response.json();

	let worddictionary = data[0]?.word;
	let define = data[0]?.meanings[1]?.definitions[0]?.definition;
	let partofspeach = data[0]?.meanings[1]?.partOfSpeech;
	let phonetics = data[0]?.phonetic;
	let phoneaudio = data[0]?.phonetics[6]?.audio;
	console.log('define from server: ' + JSON.stringify(define, null, 4));

	// Return the data as a prop
	return { define, partofspeach, phonetics, phoneaudio, worddictionary };
}
