import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        message: " Please guess a number between 1-6",
        type: "number",
        name: "userguessnumber",
    },
]);
console.log(answers);
if (answers.userguessnumber === randomnumber) {
    console.log("Congratulations! You guessed right number");
}
else {
    console.log("you guessed wrong number");
}
console.log("The Number was: " + randomnumber);
