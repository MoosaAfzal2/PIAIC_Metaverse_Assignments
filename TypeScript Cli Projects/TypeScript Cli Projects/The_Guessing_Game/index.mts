#!/usr/bin/env node
import inquirer from "inquirer"
import chalk from "chalk"
import chalkAnimation from "chalk-animation";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1500));
const rainbowTitle = chalkAnimation.rainbow("    GUESSING GAME By Moosa Afzal   ")
await sleep();
rainbowTitle.stop();


var Guess_Number: number = Math.round(Math.random() * 10)
var Round: number = 0
console.log("------------------------------------------------------------")
console.log(chalk.magentaBright("Let's See How many Rounds it Takes You to Guess? (Hint: The number is between 0 and 10)"))
console.log("------------------------------------------------------------");

async function Guess_Game() {
    await inquirer.prompt({
        type: "input",
        name: "Guess",
        message: chalk.yellowBright("Enter Your Guess Number: "),
        validate: (input) => {
            if (isNaN(input) || input === "") {
                return "Please Enter a Number Value"
            }
            return true
        }
    }).then((answer) => {
        if (answer["Guess"] == Guess_Number) {
            console.log(chalk.greenBright("You have Guessed Correctly!"))
            console.log(chalk.hex("#ffa500").bold(`It took You ${Round} Rounds to Guess The Number`))
            if (Round === 0) {
                console.log(chalk.blueBright("Amazing! That was a Fluke"))
            }
        } else {
            console.log(chalk.redBright("You have Guessed Wrong!"))
            Round += 1
            Guess_Game()
        }
    })
}

Guess_Game()