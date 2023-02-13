#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1500));
const rainbowTitle = chalkAnimation.rainbow("    WORD COUNTER By Moosa Afzal   ")
await sleep();
rainbowTitle.stop();
console.log("-------------------------------------");

console.log(chalk.magenta("Enter a Paragraph and i will tell you haw many words and characters it has"))
console.log("-----------------------------------------------------------");

inquirer.prompt({
    type: "input",
    name: "Paragraph",
    message: chalk.yellowBright("Enter Here: "),
    validate: (input) => {
        if (input === "") {
            return "Please Enter a Correct Value"
        }
        return true
    }
}).then((ans) => {
    let lst: string[] = ans["Paragraph"].split(" ")
    let string2: string = lst.join("")
    console.log("\n", chalk.greenBright(`You have ${string2.length} Characters and ${lst.length} Words in Your Paragraph`))
})