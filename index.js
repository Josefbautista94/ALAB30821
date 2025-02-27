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

// Using this information, your objectives are to:
// Predict the plant growth after a specific number of weeks.
// Implement control flow to make decisions on whether the plants should be:
// Pruned, to stop them from exceeding the capacity of the garden.
// This condition should be met if the plant count after the given number of weeks is greater than 80% of the maximum capacity of the garden.
// Monitored, if they are growing at an acceptable rate.
// This condition should be met if the plant count is between 50% and 80% of the maximum capacity of the garden after the given number of weeks.
// Planted, if there is room to plant more plants.
// This condition should be met if the plant count after the given number of weeks is less than 50% of the maximum capacity of the garden.
// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

// Calculating the area of the garden
const PI = 3.1415;
const radius = 5;
const area = PI * radius * radius;

// Figuring out the max cap for plants
let spaceForPlants = 0.8;
let maxCapforPlants = area/spaceForPlants;

console.log(`The garden can fit a total of ${maxCapforPlants} plants.`); 

let week1Plants = 20;
let week2Plants = week1Plants * 2;
let week3Plants = week2Plants * 2;

console.log(`Week 1: ${week1Plants} plants
Week 2: ${week2Plants} plants
Week 3: ${week3Plants} plants`);

if(week1Plants < maxCapforPlants  * .50){
    console.log(`The garden is not at full capacity yet, we can still grow since it hasn't
even hit the half capacity which is : ${maxCapforPlants * .50}%, we are currently at
${week1Plants} plants which is : ${(week1Plants/maxCapforPlants) * 100}% of the full capacity.`);
}
else if(week1Plants >= maxCapforPlants * .50 && week1Plants <= maxCapforPlants * .80){
    console.log(`The garden is at half capacity, or more but not yet above 80% capacity, we are currently at 
${(week1Plants/maxCapforPlants)*100} we can still plant more lets monitor till next week`);
}
else if(week1Plants > maxCapforPlants * .80){
    console.log(`The garden is almost reaching full capacity, lets not plant more, we are currently at
${(week1Plants/maxCapforPlants)*100}% of the full capacity.`);
}

if(week2Plants < maxCapforPlants  * .50){
    console.log(`The garden is not at full capacity yet, we can still grow since it hasn't
even hit the half capacity which is : ${maxCapforPlants * .50}%, we are currently at
${week2Plants} plants which is : ${(week2Plants/maxCapforPlants) * 100}% of the full capacity.`);
}
else if(week2Plants >= maxCapforPlants * .50 && week2Plants <= maxCapforPlants * .80){
    console.log(`The garden is at half capacity, or more but not yet above 80% capacity, we are currently at 
${(week2Plants/maxCapforPlants)*100} we can still plant more lets monitor till next week`);
}
else if(week2Plants > maxCapforPlants * .80){
    console.log(`The garden is almost reaching full capacity, lets not plant more, we are currently at
${(week2Plants/maxCapforPlants)*100}% of the full capacity.`);
}

if(week3Plants < maxCapforPlants  * .50){
    console.log(`The garden is not at full capacity yet, we can still grow since it hasn't
even hit the half capacity which is : ${maxCapforPlants * .50}%, we are currently at
${week3Plants} plants which is : ${(week3Plants/maxCapforPlants) * 100}% of the full capacity.`);
}
else if(week3Plants >= maxCapforPlants * .50 && week3Plants < maxCapforPlants * .80){
    console.log(`The garden is at half capacity, or more but not yet above 80% capacity, we are currently at 
${(week3Plants/maxCapforPlants)*100} we can still plant more lets monitor till next week`);
}
else if(week3Plants >= maxCapforPlants * .80){
    console.log(`The garden is almost reaching full capacity, lets not plant more, we are currently at
${(week3Plants/maxCapforPlants)*100}% of the full capacity.`);
}

// Part 2: Thinking Bigger
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required 
// if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

