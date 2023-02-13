#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
/***** This is just the starting animation code ignore it *****/
const sleep = () => new Promise((resolve) => setTimeout(resolve, 1500));
const rainbowTitle = chalkAnimation.rainbow('Calculator By Moosa Afzal \n');
await sleep();
rainbowTitle.stop();
/***** The Calculator code starts from here *****/
// For First Number
let FirstNumber = await inquirer.prompt({
    type: "input",
    name: "First Number",
    message: chalk.redBright("Enter First Number: "),
    validate: (input) => {
        if (isNaN(input) || input === "") {
            return "Please Enter a Number Value";
        }
        return true;
    }
});
Calculate(parseFloat(FirstNumber["First Number"]));
async function Calculate(num) {
    // Prompt for the Operator
    let Operator = await inquirer.prompt({
        name: "Operator",
        type: "list",
        message: chalk.magentaBright("Choose an Operator: "),
        choices: ["+", "-", "*", "/", "power"]
    });
    // For the Second Number
    let SecondNumber = await inquirer.prompt({
        type: "input",
        name: "Second Number",
        message: chalk.blueBright("Enter Second Number: "),
        validate: (input) => {
            if (isNaN(input) || input === "") {
                return "Please Enter a Number Value";
            }
            return true;
        }
    });
    // Condtitions for type of Calculations
    let num2 = parseFloat(SecondNumber["Second Number"]);
    switch (Operator["Operator"]) {
        case "+":
            num = num + num2;
            console.log(chalk.yellowBright("Answer:"), num);
            break;
        case "-":
            num = num - num2;
            console.log(chalk.greenBright("Answer:"), num);
            break;
        case "*":
            num = num * num2;
            console.log(chalk.cyanBright("Answer:"), num);
            break;
        case "/":
            num = num / num2;
            console.log(chalk.hex("#FFA500").bold("Answer:"), num);
            break;
        case "power":
            num = num ** num2;
            console.log(chalk.hex("#BF40BF").bold("Answer:"), num);
            break;
    }
    // Keeps Calling the function until user Enter No
    let Confirm = await inquirer.prompt({
        type: "confirm",
        name: "Continue",
        message: chalk.whiteBright("Do You want to Continue?")
    });
    if (Confirm["Continue"]) {
        Calculate(num);
    }
    else {
        console.log(chalk.hex("#FF5733").bold("Thank You For using my Calculator."));
    }
}
