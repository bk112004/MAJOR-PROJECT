// Create an audio element dynamically
const audio = document.createElement('audio');
audio.src = 'music.mp3'; // Path to your audio file
audio.loop = true; // Set audio to loop

// Append the audio element to the body
document.body.appendChild(audio);

// Start playing audio when the user presses the Enter key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    if (audio.paused) {
      audio.play(); // Start playing the audio
      console.log('Audio started and playing continuously.');
    }
  }
});

// Stop playing audio when the user presses the Shift key
document.addEventListener('keydown', (event) => {
  if (event.key === 'Shift') {
    if (!audio.paused) {
      audio.pause(); // Pause the audio
      console.log('Audio stopped.');
    }
  }
});