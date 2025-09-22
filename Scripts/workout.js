const workouts = {
  arms: {
    none: ["Push-ups", "Tricep dips", "Arm circles", "Diamond push-ups", "Plank shoulder taps"],
    dumbbells: ["Bicep curls", "Shoulder press", "Lateral raises", "Hammer curls", "Arnold press"],
    bands: ["Band curls", "Band tricep extensions", "Band shoulder press", "Band pull-aparts", "Face pulls"],
    kettlebells: ["Kettlebell curls", "Kettlebell press", "Kettlebell upright rows", "Overhead tricep extension", "Kettlebell halos"]
  },
  legs: {
    none: ["Squats", "Lunges", "Glute bridges", "Calf raises", "Jump squats"],
    dumbbells: ["Goblet squats", "Deadlifts", "Step-ups", "Dumbbell lunges", "Sumo squats"],
    bands: ["Banded squats", "Banded side steps", "Banded hip thrusts", "Monster walks", "Banded kickbacks"],
    kettlebells: ["Kettlebell goblet squats", "Kettlebell swings", "Kettlebell lunges", "Sumo deadlifts", "Kettlebell step-ups"]
  },
  full: {
    none: ["Burpees", "Jumping jacks", "Mountain climbers", "High knees", "Plank jacks"],
    dumbbells: ["Thrusters", "Renegade rows", "Clean and press", "Dumbbell snatch", "Man makers"],
    bands: ["Banded burpees", "Banded push press", "Banded deadlifts", "Banded squat to press", "Banded rows"],
    kettlebells: ["Kettlebell clean and press", "Turkish get-up", "Kettlebell snatch", "Kettlebell high pull", "Kettlebell complex"]
  }
};

document.getElementById("workoutForm").addEventListener("submit", function(e) {
  e.preventDefault();
  generateWorkout();
});

function generateWorkout() {
  const bodyPart = document.getElementById("bodyPart").value;
  const equipment = document.getElementById("equipment").value;
  const exerciseList = workouts[bodyPart][equipment];

  // Pick 3 unique random exercises
  const chosenExercises = [];
  while (chosenExercises.length < 3) {
    const randomExercise = exerciseList[Math.floor(Math.random() * exerciseList.length)];
    if (!chosenExercises.includes(randomExercise)) {
      chosenExercises.push(randomExercise);
    }
  }

  // Display workout plan
  const workoutPlanDiv = document.getElementById("workoutPlan");
  workoutPlanDiv.innerHTML = `
    <h3>Your Workout Plan:</h3>
    <ol>
      ${chosenExercises.map(ex => `
        <li>${ex} <button class="btn-main" onclick="startTimer(30, this)">Start Timer</button></li>
      `).join("")}
    </ol>
    <div class="actions">
      <button onclick="generateWorkout()">Choose Again</button>
      <button onclick="resetWorkout()"> Start Again</button>
    </div>
  `;

  document.getElementById("timer").innerHTML = ""; // clear timer display
}

// Timer for each exercise
function startTimer(seconds, btn) {
  const timerDisplay = document.getElementById("timer");
  let timeLeft = seconds;

  timerDisplay.innerText = ` Timer: ${timeLeft}s`;
  btn.disabled = true;

  const countdown = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = ` Timer: ${timeLeft}s`;

    if (timeLeft < 0) {
      clearInterval(countdown);
      timerDisplay.innerText = " Done!";
      btn.disabled = false;
      new Audio("https://www.soundjay.com/button/beep-07.wav").play();
    }
  }, 1000);
}

// Reset workout completely
function resetWorkout() {
  document.getElementById("workoutPlan").innerHTML = "";
  document.getElementById("timer").innerHTML = "";
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
