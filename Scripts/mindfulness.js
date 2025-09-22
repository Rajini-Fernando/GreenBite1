// ===== Guided Breathing Animation =====
const breathingCircle = document.getElementById('breathing-circle');
const breathingText = document.getElementById('breathing-text');
const startBreathingBtn = document.getElementById('start-breathing');

let breathingInterval;

startBreathingBtn.addEventListener('click', () => {
    let cycle = 0;
    const steps = [
        {text: 'Inhale', scale: 1.5},
        {text: 'Hold', scale: 1.5},
        {text: 'Exhale', scale: 1},
        {text: 'Hold', scale: 1}
    ];

    clearInterval(breathingInterval);
    breathingInterval = setInterval(() => {
        const step = steps[cycle % steps.length];
        breathingText.textContent = step.text;
        breathingCircle.style.transform = `scale(${step.scale})`;
        cycle++;
    }, 4000);
});

// ===== Timer Tool =====
const timerDisplay = document.getElementById('timer-display');
const startTimerBtn = document.getElementById('start-timer');
const pauseTimerBtn = document.getElementById('pause-timer');
const resetTimerBtn = document.getElementById('reset-timer');
const durationInput = document.getElementById('timer-duration');
const sessionCountDisplay = document.getElementById('session-count');

let timer;
let totalSeconds = 0;
let remainingSeconds = 0;
let isRunning = false;

// Load saved session count
let completedSessions = parseInt(localStorage.getItem('completedSessions')) || 0;
sessionCountDisplay.textContent = completedSessions;

function updateTimerDisplay(seconds) {
    let mins = Math.floor(seconds / 60);
    let secs = seconds % 60;
    timerDisplay.textContent = `${String(mins).padStart(2,'0')}:${String(secs).padStart(2,'0')}`;
}

startTimerBtn.addEventListener('click', () => {
    if(!isRunning) {
        totalSeconds = durationInput.value * 60;
        if(remainingSeconds === 0) remainingSeconds = totalSeconds;
        timer = setInterval(() => {
            if(remainingSeconds <= 0) {
                clearInterval(timer);
                isRunning = false;
                remainingSeconds = 0;
                completedSessions++;
                localStorage.setItem('completedSessions', completedSessions);
                sessionCountDisplay.textContent = completedSessions;
                alert('Session Complete!');
            } else {
                remainingSeconds--;
                updateTimerDisplay(remainingSeconds);
            }
        }, 1000);
        isRunning = true;
    }
});

pauseTimerBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
});

resetTimerBtn.addEventListener('click', () => {
    clearInterval(timer);
    isRunning = false;
    remainingSeconds = totalSeconds;
    updateTimerDisplay(remainingSeconds);
});

// Initialize timer display
updateTimerDisplay(0);

// ===== Ambient Sound Toggle =====
const soundBtn = document.getElementById('toggle-sound');
const ambientSound = document.getElementById('ambient-sound');
let soundPlaying = false;

soundBtn.addEventListener('click', () => {
    if(soundPlaying) {
        ambientSound.pause();
        soundBtn.textContent = 'Play Sound';
    } else {
        ambientSound.play();
        soundBtn.textContent = 'Pause Sound';
    }
    soundPlaying = !soundPlaying;
});

const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navbar ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    // optional: animate hamburger
    hamburger.classList.toggle("active");
  });