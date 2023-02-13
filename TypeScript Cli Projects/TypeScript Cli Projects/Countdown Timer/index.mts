#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";

const sleep = () => new Promise((resolve) => setTimeout(resolve, 1500));
const rainbowTitle = chalkAnimation.rainbow("    COUNTDOWN TIMER By Moosa Afzal   ")
await sleep();
rainbowTitle.stop();

console.log("--------------------------------------------");
console.log(chalk.magentaBright("Please Enter the Date you want to Countdown the Time To:"));
console.log("--------------------------------------------------------");

let input: { day: string, month: string, year: string, Time: string, Time2: string } = await inquirer.prompt([
    {
        type: "input",
        name: "day",
        message: chalk.greenBright("Enter Day: "),
        validate: (input) => {
            if (isNaN(input) || input === "" || input > 31) {
                return "Please Enter a Number Value"
            }
            return true
        }
    },
    {
        type: "input",
        name: "month",
        message: chalk.blueBright("Enter Month: "),
        validate: (input) => {
            if (isNaN(input) || input === "" || input > 12) {
                return "Please Enter a Number Value"
            }
            return true
        }
    },
    {
        type: "input",
        name: "year",
        message: chalk.redBright("Enter Year(2023 Or greater): "),
        validate: (input) => {
            if (isNaN(input) || input === "") {
                return "Please Enter a Number Value"
            }
            return true
        }
    },
    {
        type: "input",
        name: "Time",
        message: chalk.gray("Enter Time (Example: 05:00): "),
        validate: (input) => {
            if (input === "") {
                return "Please Enter a Number Value"
            }
            return true
        }
    },
    {
        type: "list",
        name: "Time2",
        message: chalk.whiteBright("Select: "),
        choices: ["AM", "PM"]
    },
])

if (input.Time2 === "PM") {
    let newtime = input.Time.split(":")
    input.Time = parseInt(newtime[0]) + 12 + ":" + newtime[1]
}

function addZero(val: (number | string)) {
    if (typeof (val) == "string") {
        if (parseInt(val) < 10) {
            return "0" + val
        } else { return val }
    }
    if (typeof (val) == "number") {
        if (val < 10) {
            return "0" + val
        } else { return val }
    }
}


let deadline: string = addZero(input.year) + "-" + addZero(input.month) + "-" + addZero(input.day) + "T" + input.Time + ":" + "00"

let Timer = (): number => {

    let total = Date.parse(deadline) - Date.now()
    let seconds: number = Math.floor((total / 1000) % 60);
    let minutes: number = Math.floor((total / 1000 / 60) % 60);
    let hours: number = Math.floor((total / (1000 * 60 * 60)) % 24);
    let days: number = Math.floor(total / (1000 * 60 * 60 * 24));

    if (total < 0) {
        seconds = 0
        minutes = 0
        hours = 0
        days = 0
    }

    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(chalk.whiteBright(
        `${addZero(days)}          ${addZero(hours)}           ${addZero(minutes)}            ${addZero(seconds)}`
    ));

    return total
}

console.log(chalk.yellowBright("Days   :   Hours   :   Minutes   :   Seconds"));
let countdown = setInterval(() => {
    if (Timer() <= 0) {
        clearInterval(countdown)
        console.log("\n--------------------------");
        console.log(chalk.blueBright("The CountDown has Finished"));
        console.log("--------------------------");

    }
}, 1000)

