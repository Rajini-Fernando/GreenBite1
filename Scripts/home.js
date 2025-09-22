  const slogans = [
    "Eat Healthy, Live Happy!",
    "Fuel Your Body, Nourish Your Mind",
    "Green Choices, Better Planet",
    "Discover Delicious Wellness",
    "Mindful Eating, Mindful Living"
  ];

  let index = 0;
  const sloganElement = document.getElementById("slogan");

  function rotateSlogans() {
    // Fade out
    sloganElement.style.opacity = 0;

    setTimeout(() => {
      // Change text
      sloganElement.textContent = slogans[index];
      // Fade in
      sloganElement.style.opacity = 1;

      // Next slogan
      index = (index + 1) % slogans.length;
    }, 500); // matches CSS transition duration
  }

  // Rotate every 3 seconds
  setInterval(rotateSlogans, 3000);


const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".navbar ul");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
    // optional: animate hamburger
    hamburger.classList.toggle("active");
  });