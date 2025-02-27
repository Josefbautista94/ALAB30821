// ALAB 308.2.1: Control Flow

//Part 1: Growing Pains

//Your task is to create a program that advises a group of environmental scientists how to handle 
// the growth and spread of a unique plant species under their supervision. 
// You must develop a growth control system that will monitor and predict the plant growth, 
// making decisions based on the available space and potential growth.

//Here is the information you have been given:


// The area in which the plants are contained is circular, with a radius of 5 meters.
// The formula for calculating the area of a circle is PI multiplied by the radius, squared:
// const PI = 3.1415;
// const area = PI * radius * radius;

// Each plant requires a minimum space of 0.8 square meters.

//The area is starting with 20 plants.

//The plants double in number every week.

// Calculating the area of the garden
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

// Figuring out the max cap for plants
let plants = 20;
let spaceForPlants = 0.8;
let maxCapforPlants = area/spaceForPlants;

console.log(maxCapforPlants);