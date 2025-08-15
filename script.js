//global
const upload = document.getElementById('upload');
const playlist = document.getElementById('playlists');
const player = document.getElementById('player');
const loopToggle = document.getElementById('loopToggle');

let tracks = []; // Declare globally so playTrack() can access it

upload.addEventListener('change',(event) => {
    tracks = Array.from(event.target.files); //Takes the uploaded music and turns into array for playlist
    playlist.innerHTML = '';

    tracks.forEach((track, index) => { //reads the array and decides what to do with the code.
    const listItem = document.createElement('li'); //creates a new <li> in the playlist <ul>, adds the song to the playlist
    listItem.textContent = track.name; //sets the name of the <li> to the name of the song (which is the file uploaded)
    listItem.onclick = () => playTrack(index); //makes the <li> clickable so that you can jump to the song
    playlist.appendChild(listItem); //adds tne <li> on the page for you to see
  });

  playTrack(0); //plays the first track (position 0 in the array)
});

function playTrack(index) {
    const file = tracks[index]; //grabs the file from the tracks (list of uploaded files)
    const url = URL.createObjectURL(file); //turns the file into a temporary URL that thr browser can play
    player.src = url; //sets the audio source to the URL that was just created
    player.play(); //starts playing audio
}

loopToggle.onclick = () => {
    player.loop = !player.loop; //flips the loop from off to on
    loopToggle.textContent = `Loop: ${player.loop ? 'On' : 'Off'}`; //current loop status button
};

document.addEventListener('keydown', (event) => { //listens for keys on the page
    if (event.code === 'Space') { //if the spacebar is pressed do the following
        event.preventDefault(); //stops the browser from scrolling down (defualt action for the browser)
        player.paused ? player.play() : player.pause(); //actually pauses the music
    }
});

console.log("JavaScript is present!");