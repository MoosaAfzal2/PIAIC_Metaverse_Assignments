#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
import ora from "ora";
const sleep = () => new Promise((resolve) => setTimeout(resolve, 1500));
const rainbowTitle = chalkAnimation.rainbow("    ATM By Moosa Afzal   ");
await sleep();
rainbowTitle.stop();
console.log("------------------------------------");
const spinner = ora('Loading unicorns');
spinner.color = "green";
spinner.text = 'Processing...';
let delay = async () => {
    spinner.start();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    spinner.stop();
};
let Input = await inquirer.prompt([{
        type: "input",
        name: "ID",
        message: chalk.greenBright("Please Enter Your ID: ")
    }, {
        type: "input",
        name: "Pin",
        message: chalk.greenBright("Please Enter a 4-Digit Pin Number: "),
        validate: (input) => {
            if (isNaN(input)) {
                return "Please Enter a number Value";
            }
            else if (input < 999 || input > 9999) {
                return "Please Enter only 4 Digits";
            }
            return true;
        }
    }]);
console.log(chalk.cyanBright("Welcome,"), chalk.hex("#BF40BF").bold(Input["ID"]));
let Balance = Math.round(Math.random() * 10000);
async function ATM() {
    let Functionality = await inquirer.prompt({
        type: "list",
        name: "Choices",
        message: chalk.redBright("Please Choose a Transaction to do:"),
        choices: [chalk.yellowBright("Check Balance"), chalk.yellowBright("Deposit Cash"), chalk.yellowBright("Withdraw Cash")]
    });
    let getAmount = async () => {
        let value = await inquirer.prompt({
            type: "number",
            name: "Amount",
            message: chalk.greenBright("Please Enter Amount: ")
        });
        return value["Amount"];
    };
    switch (Functionality["Choices"]) {
        case chalk.yellowBright("Check Balance"):
            await delay();
            console.log(`Your Current Balance: ${Balance}$`);
            break;
        case chalk.yellowBright("Deposit Cash"):
            await delay();
            let Deposit = await getAmount();
            Balance += Deposit;
            await delay();
            console.log(`${Deposit}$ has been Deposited`);
            break;
        case chalk.yellowBright("Withdraw Cash"):
            await delay();
            let Withdraw = await getAmount();
            Balance -= Withdraw;
            await delay();
            console.log(`${Withdraw}$ has been Withdrawn`);
            break;
    }
    await inquirer.prompt({
        type: "confirm",
        name: "Exit",
        message: chalk.hex("#FFA500").bold("Do you Want to do more Transactions?: ")
    }).then((ans) => {
        if (ans["Exit"]) {
            ATM();
        }
        else {
            console.log("---------------------------");
            console.log(chalk.blueBright("Thank You for using my ATM"));
            console.log("---------------------------");
        }
    });
}
ATM();
