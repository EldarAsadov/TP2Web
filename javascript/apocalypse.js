const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV6cWN6cG5meWFhb3hmY3VmbXhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk1NTc5NTAsImV4cCI6MjAxNTEzMzk1MH0.yaEZdlhpqqu1USJdI5S82mGwHM9PNAHz3VIkVqlXmPE';
const SUPABASE_URL = 'https://uzqczpnfyaaoxfcufmxj.supabase.co';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

let scenesData; // Declare scenesData globally

window.onload = async function () {
    // Fetch data from the Scenes table
    const { data: scenes, error: scenesError } = await supabase.from('Table_scenes').select('*');

    scenesData = scenes || []; // Assign the fetched data to the scenesData variable

    // Process the retrieved data and use it in your game
    // (e.g., populate your game scenes with images, text, and sounds)
};

// Example: Populate the first scene with retrieved data
const initialScene = scenesData.find(scene => scene['Numero_de_scene'] === 1);

console.log(scenesData);

// Example: Display the image, text, and choices in your HTML
document.getElementById('No_Image').src = initialScene['Numero_dimage'];
document.getElementById('TEXT').innerText = initialScene['Texte'];
document.getElementById('Text_Choix').innerText = initialScene['Texte choix 1'];
document.getElementById('Text_choix2').innerText = initialScene['Texte choix 2'];
document.getElementById('Text_choix3').innerText = initialScene['Texte choix 3'];
// ... and so on

// Example: Handle user choice 1
const handleChoice1 = async function () {
    const nextSceneNumber = initialScene['Numéro de scène où mène le choix 1'];
    const nextScene = scenesData.find(scene => scene['Numero_de_scene'] === nextSceneNumber);

    // Update the UI with the new scene data
    document.getElementById('No_Image').src = nextScene['Numero_dimage'];
    document.getElementById('TEXT').innerText = nextScene['Texte'];
    // ... and so on
};

// Example: Attach the choice handler to a button
document.getElementById('No_Choix').addEventListener('click', handleChoice1);

