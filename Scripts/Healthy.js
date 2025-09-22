const recipes = {
  "Avocado Toast": {
    ingredients: ["2 slices whole grain bread", "1 avocado", "Salt & pepper", "Chia seeds"],
    steps: ["Toast bread", "Mash avocado", "Spread on toast", "Sprinkle seeds"],
    nutrition: {calories: 250, carbs: 20, protein: 6, fat: 15}
  },
  "Oatmeal Bowl": {
    ingredients: ["1/2 cup oats", "1 cup milk", "Banana slices", "Almonds"],
    steps: ["Cook oats with milk", "Top with banana & almonds"],
    nutrition: {calories: 300, carbs: 45, protein: 9, fat: 8}
  },
  "Greek Yogurt Parfait": {
    ingredients: ["1 cup Greek yogurt", "1/4 cup granola", "Berries"],
    steps: ["Layer yogurt", "Add granola", "Top with berries"],
    nutrition: {calories: 280, carbs: 35, protein: 12, fat: 9}
  },
  "Veggie Omelette": {
    ingredients: ["2 eggs", "Spinach", "Bell peppers", "Onion"],
    steps: ["Beat eggs", "Cook veggies", "Add eggs", "Fold omelette"],
    nutrition: {calories: 220, carbs: 6, protein: 14, fat: 15}
  },

  "Quinoa Salad": {
    ingredients: ["1 cup quinoa", "Cucumber", "Tomatoes", "Olive oil"],
    steps: ["Cook quinoa", "Chop veggies", "Mix all with olive oil"],
    nutrition: {calories: 350, carbs: 55, protein: 12, fat: 10}
  },
  "Grilled Chicken Wrap": {
    ingredients: ["1 wrap", "Grilled chicken", "Lettuce", "Tomato"],
    steps: ["Grill chicken", "Assemble wrap with veggies"],
    nutrition: {calories: 400, carbs: 30, protein: 28, fat: 15}
  },
  "Lentil Soup": {
    ingredients: ["1 cup lentils", "Carrots", "Onion", "Garlic"],
    steps: ["Cook onion & garlic", "Add lentils & carrots", "Simmer"],
    nutrition: {calories: 280, carbs: 40, protein: 15, fat: 6}
  },
  "Stuffed Bell Peppers": {
    ingredients: ["Bell peppers", "Quinoa", "Black beans", "Cheese"],
    steps: ["Cook quinoa", "Mix with beans", "Stuff peppers", "Bake"],
    nutrition: {calories: 370, carbs: 50, protein: 14, fat: 10}
  },

  "Baked Salmon": {
    ingredients: ["Salmon fillet", "Lemon", "Olive oil", "Herbs"],
    steps: ["Preheat oven", "Season salmon", "Bake 20 min"],
    nutrition: {calories: 450, carbs: 2, protein: 40, fat: 30}
  },
  "Veggie Stir-Fry": {
    ingredients: ["Broccoli", "Carrots", "Tofu", "Soy sauce"],
    steps: ["Chop veggies", "Cook tofu", "Stir-fry all"],
    nutrition: {calories: 300, carbs: 25, protein: 18, fat: 12}
  },
  "Whole Wheat Pasta": {
    ingredients: ["Whole wheat pasta", "Tomato", "Spinach", "Garlic"],
    steps: ["Cook pasta", "Make sauce", "Mix together"],
    nutrition: {calories: 380, carbs: 60, protein: 14, fat: 8}
  },
  "Turkey Meatballs": {
    ingredients: ["Ground turkey", "Breadcrumbs", "Garlic", "Tomato sauce"],
    steps: ["Mix turkey & seasoning", "Shape meatballs", "Cook in sauce"],
    nutrition: {calories: 410, carbs: 15, protein: 35, fat: 18}
  },

  "Energy Balls": {
    ingredients: ["Oats", "Peanut butter", "Honey", "Chia seeds"],
    steps: ["Mix all", "Roll balls", "Chill"],
    nutrition: {calories: 150, carbs: 18, protein: 4, fat: 7}
  },
  "Apple Slices with Almond Butter": {
    ingredients: ["Apple", "Almond butter"],
    steps: ["Slice apple", "Spread almond butter"],
    nutrition: {calories: 180, carbs: 22, protein: 3, fat: 9}
  },
  "Hummus & Veggie Sticks": {
    ingredients: ["Carrots", "Cucumber", "Hummus"],
    steps: ["Slice veggies", "Serve with hummus"],
    nutrition: {calories: 200, carbs: 20, protein: 6, fat: 10}
  },
  "Trail Mix": {
    ingredients: ["Almonds", "Raisins", "Pumpkin seeds"],
    steps: ["Mix all together"],
    nutrition: {calories: 220, carbs: 25, protein: 6, fat: 12}
  }
};

// Search
document.getElementById("searchInput").addEventListener("input", e => {
  const value = e.target.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = text.includes(value) ? "block" : "none";
  });
});

// Modal
const modal = document.getElementById("recipeModal");
const closeModal = document.getElementById("closeModal");

function openModal(title) {
  const recipe = recipes[title];
  document.getElementById("recipeTitle").innerText = title;
  document.getElementById("recipeIngredients").innerHTML = recipe.ingredients.map(i => `<li>${i}</li>`).join("");
  document.getElementById("recipeSteps").innerHTML = recipe.steps.map(s => `<li>${s}</li>`).join("");
  document.getElementById("nutritionTable").innerHTML = `
    <tr>
      <td>${recipe.nutrition.calories}</td>
      <td>${recipe.nutrition.carbs}g</td>
      <td>${recipe.nutrition.protein}g</td>
      <td>${recipe.nutrition.fat}g</td>
    </tr>`;
  modal.style.display = "flex";
}
closeModal.onclick = () => (modal.style.display = "none");
window.onclick = e => {
  if (e.target == modal) modal.style.display = "none";
}

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.navbar ul');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});