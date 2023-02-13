#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1500));
const rainbowTitle = chalkAnimation.rainbow("    TODO APP By Moosa Afzal   ")
await sleep();
rainbowTitle.stop();

console.log("-------------------------------------");

let Tasks: string[] = []
let j = "run"

while (j != "q") {
    let input: { Task: string } = await inquirer.prompt({
        type: "input",
        name: "Task",
        message: chalk.yellowBright("Enter Task Or q to stop: "),
        validate: (input) => {
            if (input === "") {
                return "Please Enter a Correct Value"
            }
            return true
        }
    })
    if (input.Task != "q") {
        Tasks.push(input.Task)
    } else {
        j = "q"
    }
}

for (let i in Tasks) {
    console.log(chalk.greenBright(`Task${parseInt(i) + 1}. ${Tasks[i]}`))
}