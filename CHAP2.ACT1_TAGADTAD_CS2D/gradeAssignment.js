// Prompt user for their score
let score = prompt("Enter your score:");

// Convert the input to a number
score = Number(score);

// Use else if statements to assign grades based on score
if (score >= 90) {
    console.log("Your grade is Excellent.");
} else if (score >= 80 && score < 90) {
    console.log("Your grade is Good.");
} else if (score >= 70 && score < 80) {
    console.log("Your grade is Fair.");
} else if (score < 70) {
    console.log("Your grade is Needs Improvement.");
} else {
    console.log("Invalid input, please enter a valid score.");
}
