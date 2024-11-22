// Sentence to cycle through
const sentence = [
    "Hello.", "Just wanted to say", "that", "You🫵", "are",
    "BEAUTIFULLY", "AMAZING", "and that", "you mean",
    "the ABSOLUTE", "WORLD TO ME", "!!!", "❤️",
    "I LOVE YOU SM", "<3", "-mf", ""
];
let index = 0;

// Select elements
const wordElement = document.getElementById("word");

// Animations and color themes
const animations = ["fadeIn", "zoomIn", "slideInLeft", "slideInRight", "rotateIn", "bounceIn", "flipIn", "scaleIn", "diagonalSlideIn", "typing"];
const colorThemes = [
    "linear-gradient(to right, #ff004c, #ff7eb3)",          // 1: Vibrant pinks
    "linear-gradient(to right, #6a11cb, #00c6ff)",          // 2: Purple to bright aqua
    "linear-gradient(to right, #ff4b1f, #ff9068)",          // 3: Deep red to coral orange
    "linear-gradient(to right, #43e97b, #38f9d7)",          // 4: Green to cyan
    "linear-gradient(to right, #fc466b, #3f5efb)",          // 5: Bright pink to electric blue
    "linear-gradient(to right, #f37335, #fdc830)",          // 6: Tangerine to sunflower yellow
    "linear-gradient(to right, #12c2e9, #c471ed, #f64f59)", // 7: Blue to violet to red
    "linear-gradient(to right, #ff9a9e, #fad0c4, #fbc2eb)", // 8: Soft pink blend
    "linear-gradient(to right, #fc5c7d, #6a82fb)",          // 9: Vivid pink to purple
    "linear-gradient(to right, #ffd200, #f7971e)"           // 10: Golden yellow to orange
];
let currentColorIndex = 0;

// Function to clear animations
function clearTransitions(element) {
    element.classList.remove(...animations, "hidden");
}

// Function to apply animation
function applyAnimation(element) {
    clearTransitions(element); // Clear existing animations
    const selectedAnimation = animations[Math.floor(Math.random() * animations.length)];
    element.classList.add(selectedAnimation);
}

// Function to update the word (forward)
function updateWord() {
    wordElement.classList.add("hidden");
    setTimeout(() => {
        index = (index + 1) % sentence.length; // Move to the next word or loop back
        applyAnimation(wordElement); // Apply animation
        wordElement.textContent = sentence[index];
        wordElement.classList.remove("hidden");
    }, 200);
}

// Function to update the word (backward)
function goBackward() {
    wordElement.classList.add("hidden");
    setTimeout(() => {
        index = (index - 1 + sentence.length) % sentence.length; // Move to the previous word or loop back
        applyAnimation(wordElement); // Apply animation
        wordElement.textContent = sentence[index];
        wordElement.classList.remove("hidden");
    }, 200);
}

// Function to change color themes
function changeColorTheme(index) {
    currentColorIndex = (index - 1) % colorThemes.length; // Match key to index
    wordElement.style.background = colorThemes[currentColorIndex];
    wordElement.style.webkitBackgroundClip = "text";
    wordElement.style.color = "transparent";
}

// Add event listeners
document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight") {
        updateWord();
    } else if (event.key === "ArrowLeft") {
        goBackward();
    } else if (event.key >= "1" && event.key <= "9") {
        changeColorTheme(Number(event.key));
    } else if (event.key === "0") {
        changeColorTheme(10);
    }
});

document.body.addEventListener("click", updateWord);

// Right-click for backward
document.body.addEventListener("contextmenu", (event) => {
    event.preventDefault();
    goBackward();
});
