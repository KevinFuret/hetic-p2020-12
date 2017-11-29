export default () => {
    let activedInstrument,
        label,
        oldInstru,
        soundEnded = true;

    const pathAudio = "./sounds/sounds.mp3";
    let audio = new Audio(pathAudio);

    // All the sounds in one object with their duration and the timecode of the beginning (time in millisecond)
    // Sort by the name of the instrument then by the gesture associated
    let sounds = {
        cab: {
            panLeftRight: {
                timecode: 0,
                duration: 999
            },
            press: {
                timecode: 2000,
                duration: 1999
            },
            panUpDown: {
                timecode: 4000,
                duration: 3999
            },
            tap: {
                timecode: 8000,
                duration: 999
            }
        },
        dep: {
            panLeftRight: {
                timecode: 10000,
                duration: 999
            },
            press: {
                timecode: 12000,
                duration: 999
            },
            panUpDown: {
                timecode: 14000,
                duration: 2999
            },
            tap: {
                timecode: 18000,
                duration: 999
            }
        },
        fg: {
            panLeftRight: {
                timecode: 20000,
                duration: 999
            },
            press: {
                timecode: 22000,
                duration: 1999
            },
            panUpDown: {
                timecode: 25000,
                duration: 1999
            },
            tap: {
                timecode: 27000,
                duration: 999
            }
        },
        jors: {
            panLeftRight: {
                timecode: 29000,
                duration: 999
            },
            press: {
                timecode: 31000,
                duration: 1999
            },
            panUpDown: {
                timecode: 33000,
                duration: 2999
            },
            tap: {
                timecode: 37000,
                duration: 999
            }
        }
    };

    let canvas = document.getElementsByClassName('gestures__hammer')[0];
    let pellet = document.getElementsByClassName('gestures__pellet')[0];

    // Create a new Hammer object
    let hammer = new Hammer(canvas);

    // Allow all the directions with the Pan's gesture and setting the switching threshold
    hammer.get('pan').set({
        direction: Hammer.DIRECTION_ALL,
        threshold: 100
    });

    let instruments = document.getElementsByName('instrument');
    activedInstrument = instruments[0].value;
    oldInstru= document.querySelector('label[for="instru1"]');
    oldInstru.classList.add("gesture-active");

    function removeClass (oldInstru)
    {
        oldInstru.classList.remove("gesture-active");
    }

    // Add an event listener on the instruments + add class gesture-active
    instruments.forEach(instrument => {
        instrument.addEventListener('change', () => {
            activedInstrument = instrument.value;
            label = document.querySelector('label[for="' + instrument.id + '"]');
            label.classList.add("gesture-active");
            removeClass(oldInstru);
            oldInstru = label;
        });
    });

    // Add an event listener on the gestures and active the animation of the pellet associated
    let gestures = document.getElementsByName('gesture');
    gestures.forEach(gesture => {
        gesture.addEventListener('change', () => {
            pellet.style.WebkitAnimationName = gesture.value;
        });
    });


    hammer.on("tap panleft panright panup pandown press", event => {
        // Test if the sound is ended before launch an another
        if (soundEnded) {

            let activedGesture = event.type;
            switch (activedGesture) {
                case 'panleft':
                    activedGesture = 'panLeftRight';
                    break;
                case 'panright':
                    activedGesture = 'panLeftRight';
                    break;
                case 'panup':
                    activedGesture = 'panUpDown';
                    break;
                case 'pandown':
                    activedGesture = 'panUpDown';
                    break;
            }

            // Recover the sound chosen into the object 'sounds'
            let activedSound = sounds[activedInstrument][activedGesture];
            // Convert the timecode into seconds
            let activedTime = activedSound.timecode / 1000;
            let activedDuration = activedSound.duration;

            // Try to launch the sound with the reading head at the right position (@activedTime)
            try {
                audio.currentTime = activedTime;
                audio.play();
                soundEnded = false;
            } catch (e) {
                soundEnded = true;
                alert('Error, sound not found');
            }

            // Stop the audio once the duration of the sound is reached
            // The boolean soundEnded switch to true, so it's now possible to launch an another sound
            setTimeout(() => {
                try {
                    audio.pause();
                    soundEnded = true;
                } catch (e) {
                    soundEnded = true;
                    alert('Error, sound not found');
                }
            }, activedDuration);
        }
    });
}