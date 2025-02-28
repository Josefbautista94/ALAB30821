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
let maxCapforPlants = Math.round(area/spaceForPlants);

console.log(`The garden can fit a total of ${maxCapforPlants} plants.`); 
let week0Plants = 20;
let week1Plants = week0Plants * 2;
let week2Plants = week1Plants * 2;
let week3Plants = week2Plants * 2;

console.log(`Week 1: ${week1Plants} plants
Week 2: ${week2Plants} plants
Week 3: ${week3Plants} plants`);

if(week1Plants < maxCapforPlants  * .50){
    console.log(`The garden is not at full capacity yet, we can still grow since it hasn't
even hit the half capacity which is : ${Math.round(maxCapforPlants * .50)}%, we are currently at
${week1Plants} plants which is : ${Math.round((week1Plants/maxCapforPlants) * 100)}% of the full capacity.`);
}
else if(week1Plants >= maxCapforPlants * .50 && week1Plants <= maxCapforPlants * .80){
    console.log(`The garden is at half capacity, or more but not yet above 80% capacity, we are currently at 
${Math.round((week1Plants/maxCapforPlants)*100)} we can still plant more lets monitor till next week`);
}
else if(week1Plants > maxCapforPlants * .80){
    console.log(`The garden is almost reaching full capacity or probably is already over, lets not plant more, we are currently at
${Math.round((week1Plants/maxCapforPlants)*100)}% of the full capacity.`);
}

if(week2Plants < maxCapforPlants  * .50){
    console.log(`The garden is not at full capacity yet, we can still grow since it hasn't
even hit the half capacity which is : ${Math.round(maxCapforPlants * .50)}%, we are currently at
${week2Plants} plants which is : ${(week2Plants/maxCapforPlants) * 100}% of the full capacity.`);
}
else if(week2Plants >= maxCapforPlants * .50 && week2Plants <= maxCapforPlants * .80){
    console.log(`The garden is at half capacity, or more but not yet above 80% capacity, we are currently at 
${Math.round((week2Plants/maxCapforPlants)*100)} we can still plant more lets monitor till next week`);
}
else if(week2Plants > maxCapforPlants * .80){
    console.log(`The garden is almost reaching full capacity or probably is already over lets not plant more, we are currently at
${Math.round((week2Plants/maxCapforPlants)*100)}% of the full capacity.`);
}

if(week3Plants < maxCapforPlants  * .50){
    console.log(`The garden is not at full capacity yet, we can still grow since it hasn't
even hit the half capacity which is : ${Math.round(maxCapforPlants * .50)}%, we are currently at
${week3Plants} plants which is : ${Math.round((week3Plants/maxCapforPlants) * 100)}% of the full capacity.`);
}
else if(week3Plants >= maxCapforPlants * .50 && week3Plants < maxCapforPlants * .80){
    console.log(`The garden is at half capacity, or more but not yet above 80% capacity, we are currently at 
${Math.round((week3Plants/maxCapforPlants)*100)} we can still plant more lets monitor till next week`);
}
else if(week3Plants >= maxCapforPlants * .80){
    console.log(`The garden is almost reaching full capacity or probably is already over lets not plant more, we are currently at
${Math.round((week3Plants/maxCapforPlants)*100)}% of the full capacity.`);
}

// Part 2: Thinking Bigger
// The conservation area in which the garden is located has multiple other gardens. 
// Using the logic you have already created, determine:
// The amount of additional space that would be required 
// if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
// If the space remained circular, what would be the radius of this expanded garden?

let newWeek0Plants = week0Plants *5;
let newWeek1Plants = newWeek0Plants * 2;
let newWeek2Plants = newWeek1Plants * 2;
let newWeek3Plants = newWeek2Plants * 2;
let newWeek4Plants = newWeek3Plants * 2;
let newWeek5Plants = newWeek4Plants * 2;
let newWeek6Plants = newWeek5Plants * 2;
let newWeek7Plants = newWeek6Plants * 2;
let newWeek8Plants = newWeek7Plants * 2;
let newWeek9Plants = newWeek8Plants * 2;
let newWeek10Plants = newWeek9Plants * 2;
//LOL wish i coulda looped this
console.log(`Week 1: ${newWeek1Plants} plants`);
console.log(`Week 2: ${newWeek2Plants} plants`);
console.log(`Week 3: ${newWeek3Plants} plants`);
console.log(`Week 4: ${newWeek4Plants} plants`);
console.log(`Week 5: ${newWeek5Plants} plants`);
console.log(`Week 6: ${newWeek6Plants} plants`);
console.log(`Week 7: ${newWeek7Plants} plants`);
console.log(`Week 8: ${newWeek8Plants} plants`);
console.log(`Week 9: ${newWeek9Plants} plants`);
console.log(`Week 10: ${newWeek10Plants} plants`);


let newRequiredSpace = Math.round(newWeek10Plants * 0.8);
let newRadius = Math.round(Math.sqrt(newRequiredSpace / PI));

console.log(`The new radius of the expanded garden would be: ${newRadius} meters`);

// Part 3: Error Handling
// The scientists decided not to listen to your recommendations, and have instead started with 100
// plants in the original 5-meter-radius garden.
// Use try and catch to wrap your work in an error-handling block. If the amount of space required to
// hold the originally provided number of plants exceeds the amount of space available, throw a new
// error and log an appropriate message.

try {
    if (newRequiredSpace > area) {
        throw new Error("Error: Not enough space for the plants!");
    }
} catch (error) {
    console.log(error.message);
}
console.log(`The new required space for the new plants: ${newRequiredSpace}`);
