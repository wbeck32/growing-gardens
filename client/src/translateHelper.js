// Imports the Google Cloud client library
import { Translate } from '@google-cloud/translate';


/// Your Google Cloud Platform project ID
const projectId = 'YOUR_PROJECT_ID';

// Instantiates a client
const translate = new Translate({
    projectId : projectId,
});

// The text to translate
const text = 'Hello, world!';
// The target language
const target = 'ru';

// Translates some text into Russian
translate
    .translate(text, target)
    .then(results => {
        const translation = results[0];

        console.log(`Text: ${text}`);
        console.log(`Translation: ${translation}`);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
