let black_keys = document.querySelectorAll(".black-key");
let white_keys = document.querySelectorAll(".white-key");

black_keys.forEach((black_key, index) => {

    black_key.style.width = ((window.innerWidth / 21) * 50 / 100) + "px";
    black_key.style.left = ((window.innerWidth / 21)) * index + ((window.innerWidth / 21) * 50 / 100) + (((window.innerWidth / 21) * 50 / 100) / 2) + "px";
    
    if(index==20){
        black_key.style.left = ((window.innerWidth / 21)) * index + ((window.innerWidth / 21) * 50 / 100) + "px";
    }
    switch (index) {
        case 2:
        case 6:
        case 9:
        case 13:
        case 16:
        case 20: black_key.style.visibility = "hidden";
            break;
    };
});


//Sounds

const notes = {
    "C": "assets/sounds/C4.mp3",
    "D": "assets/sounds/D4.mp3",
    "E": "assets/sounds/E4.mp3",
    "F": "assets/sounds/F4.mp3",
    "G": "assets/sounds/G4.mp3",
    "A": "assets/sounds/A4.mp3",
    "B": "assets/sounds/B4.mp3",
    "C#": "assets/sounds/C4.mp3",
    "D#": "assets/sounds/D4.mp3",
    "E#": "assets/sounds/E4.mp3",
    "F#": "assets/sounds/F4.mp3",
    "G#": "assets/sounds/G4.mp3",
    "A#": "assets/sounds/A4.mp3",
    "B#": "assets/sounds/B4.mp3"
};

const octaves = {
    3: 0.75, // low
    4: 1,    // original
    5: 1.25  // high
};

document.addEventListener("click", function (e) {
    const key = e.target.closest(".key");
    if (!key) return;

    const note = key.dataset.note;
    let octave = key.dataset.octave;

    playNote(note, octave);
});

function playNote(note, octave) {
    const audio = new Audio(notes[note]);
    let rate = octaves[octave];

    if (note.includes("#"))
        rate += 0.08;

    audio.playbackRate = rate;

    audio.currentTime = 0;
    audio.play();
}

// https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/C4.mp3
// https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/D4.mp3
// https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/E4.mp3
// https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/F4.mp3
// https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/G4.mp3
// https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/A4.mp3
// https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/B4.mp3

// https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/Ds4.mp3
// https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/Fs4.mp3
// https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/Gs4.mp3
// https://gleitz.github.io/midi-js-soundfonts/FluidR3_GM/acoustic_grand_piano-mp3/As4.mp3

