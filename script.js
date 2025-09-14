/* 
  Part 2: JavaScript Functions — Scope, Parameters & Return Values
*/

// Global variable (available throughout this script)
const globalMessage = "Hello from the global scope!";

/**
 * Adds two numbers and returns the result.
 * Demonstrates parameters, return values, and local scope.
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function addNumbers(a, b) {
  // local variable inside function scope
  let sum = a + b;

  // Accessing global variable inside function
  console.log(globalMessage);

  return sum;
}

// Event listener for Calculate Sum button
document.getElementById('calculateBtn').addEventListener('click', () => {
  let num1 = 7;
  let num2 = 13;

  let result = addNumbers(num1, num2);

  document.getElementById('calcResult').textContent = `The sum of ${num1} and ${num2} is ${result}.`;
});

/* 
  Part 3: Combining CSS Animations with JavaScript
*/

// Select DOM elements
const animatedBox = document.getElementById('animatedBox');
const animateBtn = document.getElementById('animateBtn');

/**
 * Triggers the animation by adding a class that starts keyframes.
 * Uses setTimeout to remove the class after animation completes, so it can be retriggered.
 */
function triggerAnimation() {
  // Add the animation class
  animatedBox.classList.add('animate');

  // Listen for the animation end event once, then remove class
  animatedBox.addEventListener('animationend', () => {
    animatedBox.classList.remove('animate');
  }, { once: true });
}

// Add click event listener to animate button
animateBtn.addEventListener('click', triggerAnimation);
