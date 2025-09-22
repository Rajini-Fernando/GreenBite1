lucide.createIcons();

const form = document.getElementById('calcForm');
const age = document.getElementById('age');
const height = document.getElementById('height');
const weight = document.getElementById('weight');
const activity = document.getElementById('activity');
const genderInputs = document.querySelectorAll('input[name="gender"]');

const bmrEl = document.getElementById('bmrValue');
const tdeeEl = document.getElementById('tdeeValue');
const activityLabel = document.getElementById('activityLabel');

const carbBar = document.getElementById('carbBar');
const proteinBar = document.getElementById('proteinBar');
const fatBar = document.getElementById('fatBar');

const carbVal = document.getElementById('carbVal');
const proteinVal = document.getElementById('proteinVal');
const fatVal = document.getElementById('fatVal');
const macroCalories = document.getElementById('macroCalories');

const MACROS = {carbs:0.5, protein:0.2, fat:0.3};

function getGender(){ return [...genderInputs].find(r=>r.checked).value; }

function calculateBMR({gender, weight, height, age}){
  if(gender==="male") return 10*weight + 6.25*height - 5*age + 5;
  if(gender==="female") return 10*weight + 6.25*height - 5*age -161;
  return ( (10*weight + 6.25*height - 5*age + 5) + (10*weight + 6.25*height - 5*age -161) )/2;
}

function animateNumber(el, to){
  let from = parseInt(el.textContent.replace(/,/g,'')) || 0;
  let start = null;
  function step(ts){
    if(!start) start=ts;
    let progress = Math.min((ts-start)/800,1);
    let val = Math.round(from+(to-from)*progress);
    el.textContent = val.toLocaleString();
    if(progress<1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

form.addEventListener('submit', e=>{
  e.preventDefault();
  if(!age.value || !height.value || !weight.value) return;
  const data = {
    gender:getGender(),
    age:+age.value,
    height:+height.value,
    weight:+weight.value,
    activity:+activity.value
  };
  const bmr = Math.round(calculateBMR(data));
  const tdee = Math.round(bmr*data.activity);

  animateNumber(bmrEl,bmr);
  animateNumber(tdeeEl,tdee);
  activityLabel.textContent = `Activity factor: ${data.activity}`;

  const carbs = Math.round((tdee*MACROS.carbs)/4);
  const protein = Math.round((tdee*MACROS.protein)/4);
  const fat = Math.round((tdee*MACROS.fat)/9);

  carbBar.style.width = (MACROS.carbs*100)+"%";
  proteinBar.style.width = (MACROS.protein*100)+"%";
  fatBar.style.width = (MACROS.fat*100)+"%";

  carbVal.textContent = carbs+" g";
  proteinVal.textContent = protein+" g";
  fatVal.textContent = fat+" g";
  macroCalories.textContent = tdee+" kcal";
});

document.getElementById('resetBtn').addEventListener('click', ()=>{
  form.reset();
  [bmrEl,tdeeEl,carbVal,proteinVal,fatVal,macroCalories].forEach(el=>el.textContent="—");
  [carbBar,proteinBar,fatBar].forEach(bar=>bar.style.width="0%");
  activityLabel.textContent="Activity factor: —";
});

 const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navbar ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    // optional: animate hamburger
    hamburger.classList.toggle("active");
  });