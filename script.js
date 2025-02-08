// Get elements
const yesButton = document.getElementById("yes-button");
const noButton = document.getElementById("no-button");
const hiddenMessage = document.querySelector(".hidden-message");
const envelope = document.querySelector(".envelope");
const heartBackground = document.getElementById("heart-background");

// Add event listener for the Yes button
yesButton.addEventListener("click", () => {
  // Make the page rain pink hearts when Yesss!! is clicked
  for (let i = 0; i < 50; i++) {
    const heart = document.createElement("div");
    heart.classList.add("pixel-heart");
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.animationDelay = `${Math.random() * 5}s`;  // Randomize animation timing
    heartBackground.appendChild(heart);
  }

  // Show the hidden message
  setTimeout(() => {
    envelope.style.display = "none";  // Hide the envelope
    hiddenMessage.style.display = "block";  // Show the message
  }, 3000); // Delay to let hearts rain for a few seconds
});

// Add event listener for the No button
noButton.addEventListener("mouseenter", () => {
  // Move the button to a random position when hovered
  moveButtonRandomly(noButton);
});

noButton.addEventListener("click", () => {
  // Move the button to a random position when clicked
  moveButtonRandomly(noButton);
});

// Function to move the button randomly
function moveButtonRandomly(button) {
  const maxX = window.innerWidth - button.offsetWidth;
  const maxY = window.innerHeight - button.offsetHeight;
  
  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;
  
  button.style.position = "absolute";
  button.style.left = `${randomX}px`;
  button.style.top = `${randomY}px`;
}
