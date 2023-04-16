/**
 * Bouncing Ball with Vectors 
 * 
 * Demonstration of using vectors to control motion 
 * of a body.
 */

let location1;  // Location of shape
let velocity1;  // Velocity of shape
let gravity1;   // Gravity acts at the shape's acceleration

let location2;  // Location of shape
let velocity2;  // Velocity of shape
let gravity2;   // Gravity acts at the shape's acceleration

function setup() {
  createCanvas(640, 360);
  location1 = createVector(100, 100);
  velocity1 = createVector(1.5, 2.1);
  gravity1 = createVector(0, 0.2);

  location2 = createVector(350, 350);
  velocity2 = createVector(2, 2);
  gravity2 = createVector(0, 1);

}

function draw() {
  background(0);

  // Add velocity to the location.
  location1.add(velocity1);
  // Add gravity to velocity
  velocity1.add(gravity1);

  // Add velocity to the location.
  location2.add(velocity2);
  // Add gravity to velocity
  velocity2.add(gravity2);

  // Bounce off edges
  if ((location1.x > width) || (location1.x < 0)) {
    velocity1.x = velocity1.x * -1;
  }

  if (location1.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity1.y = velocity1.y * -0.95;
    location1.y = height;
  }

  if ((location2.x > width) || (location2.x < 0)) {
    velocity2.x = velocity2.x * -1;
  }

  if (location2.y > height) {
    // We're reducing velocity ever so slightly 
    // when it hits the bottom of the window
    velocity2.y = velocity2.y * -0.95;
    location2.y = height;
  }

  // Display circle at location vector
  stroke(255);
  strokeWeight(2);
  fill(105);
  ellipse(location1.x, location1.y, 60, 60);
  fill(256);
  ellipse(location2.x, location2.y, 48, 48);
}