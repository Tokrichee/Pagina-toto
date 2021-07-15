var sounds = new Array();
sounds[0] = "USA.mp3";
sounds[1] = "alma-dinamita.mp3";
sounds[2] = "panther-bambu.mp3";
sounds[3] = "Slim-Shady.mp3";

function getRandomSounds() {
    var randomNum = Math.floor(Math.random() * sounds.length);
    document.getElementById("musica").src = sounds[randomNum];
}
getRandomSounds();