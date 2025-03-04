let angle = 0; // Keeps track of the current angle of rotation
const sectors = 24; // Total number of sectors
const incrementAngle = 15; // Degrees to rotate every step
const duration = 800; // Time in milliseconds for each rotation step
let lastUpdateTime = 0; // Tracks the time for rotation

function setup() {
  createCanvas(400, 400); // Create a 400x400 pixel canvas
  angleMode(DEGREES); // Use degrees for angle-based calculations
  noStroke(); // Disable stroke by default
  generateBackground(); // Generate the background with random black-and-white dots
}

function draw() {
  renderBackground(); // Draw the pre-generated background pattern of black-and-white dots
  
  translate(width / 2, height / 2); // Move origin to canvas center
  
  // If enough time has passed, update the angle to simulate rotation
  if (millis() - lastUpdateTime > duration) {
    angle += incrementAngle; // Increment the rotation by 15 degrees clockwise
    lastUpdateTime = millis(); // Reset the timer
  }

  push();
  rotate(angle); // Apply rotation based on current angle
  
  // Draw the disk with the specified pattern
  for (let i = 0; i < sectors; i++) {
    let shadeGroup = i % 6; // Determine the shade group (0-5 in each reset)
    let brightness = map(shadeGroup, 0, 5, 0, 255); // Map group to brightness (black to gray)

    // Set stroke for the border
    stroke(150); // Gray color for the border
    strokeWeight(2); // Thickness of the border
    fill(brightness); // Set the color of the current sector
    arc(0, 0, 300, 300, i * (360 / sectors), (i + 1) * (360 / sectors), PIE); // Draw a sector
  }
  pop();
}

let backgroundPoints = []; // Store positions and colors of background dots

// Generate random black-and-white dots for the background
function generateBackground() {
  for (let i = 0; i < 2000; i++) {
    let x = random(width);
    let y = random(height);
    let color = random([0, 255]); // Randomly pick black or white for each point
    backgroundPoints.push({ x, y, color });
  }
}

// Draw the pre-generated black-and-white dots on the canvas
function renderBackground() {
  background(255); // Set background white
  for (let point of backgroundPoints) {
    fill(point.color); // Use the dot's predefined color
    rect(point.x, point.y, 2, 2); // Draw tiny squares to simulate dots
  }
}
