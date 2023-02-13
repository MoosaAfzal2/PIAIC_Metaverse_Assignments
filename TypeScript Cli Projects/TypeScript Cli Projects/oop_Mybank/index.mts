#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import ora from "ora";
import chalkAnimation from "chalk-animation";

const delay = () => new Promise((resolve) => setTimeout(resolve, 1500));
const rainbowTitle = chalkAnimation.rainbow("    WELCOME TO MY BANK (By Moosa Afzal)   ")
await delay();
rainbowTitle.stop();
console.log("-------------------------------------------");

interface IBankAccount {
    Withdraw(amount: number): string;
    Deposit(amount: number): string;
}

class BankAccount implements IBankAccount {
    AccountBalance: number
    constructor() {
        this.AccountBalance = 100
    }

    Withdraw(amount: number) {
        let statement: string = chalk.red("\nSorry, You have insufficient Balance!\n")

        if (amount > 0) {
            statement = chalk.redBright("\nThe Amount You Entered is Wrong!\n")

            if (this.AccountBalance > amount) {
                this.AccountBalance -= amount
                statement = `\nTransaction Successful! $${amount} has been Withdrawn\n`
            } else {
                statement = "\nYou don't have enough money to do this Transaction\n"
            }
        }
        return statement;
    }

    Deposit(amount: number) {
        let statement = chalk.redBright("Transaction Failed!")

        if (amount > 0) {

            this.AccountBalance += amount
            statement = `\n$${amount} has been Deposited successfully!\n`

            if (amount > 100) {
                this.AccountBalance -= 1
            }


        }
        return statement;
    }

}

class Customer {
    FirstName: string;
    LastName: string;
    Gender: string;
    Age: string;
    MobileNumber: string;
    bankAccount: BankAccount

    constructor(
        firstName: string,
        lastName: string,
        gender: string,
        age: string,
        mobileNumber: string) {

        this.FirstName = firstName
        this.LastName = lastName
        this.Gender = gender
        this.Age = age
        this.MobileNumber = mobileNumber
        this.bankAccount = new BankAccount()
    }

    CustomerInfo() {
        console.log(`\nName: ${this.FirstName + this.LastName}`)
        console.log(`Age: ${this.Age}`)
        console.log(`Gender: ${this.Gender}`)
        console.log(`Mobile Number: ${this.MobileNumber}\n`)
    }

}

interface Input {
    firstname: string
    lastname: string
    gender: string
    age: string
    mobileNumber: string
}

function Validate(input: string) {
    if (input === "") {
        return "Please Enter a Value"
    }
    return true
}

let input: Input = await inquirer.prompt([
    { type: "input", name: "firstname", message: chalk.greenBright("Enter FirstName: "), validate: (input) => Validate(input) },
    { type: "input", name: "lastname", message: chalk.greenBright("Enter LastName: "), validate: (input) => Validate(input) },
    { type: "list", name: "gender", message: chalk.greenBright("Select Gender: "), choices: ["Male", "Female"] },
    { type: "input", name: "age", message: chalk.greenBright("Enter Age: "), validate: (input) => Validate(input) },
    { type: "input", name: "mobileNumber", message: chalk.greenBright("Enter Mobile Number (With 0 instead of +92): "), validate: (input) => { if (input.length < 11) { return "Please Enter a Valid Mobile Number" } return true } },
])

let customer: Customer = new Customer(
    input.firstname,
    input.lastname,
    input.gender,
    input.age,
    input.mobileNumber,
)

const spinner = ora('Processing...')
spinner.color = "green";

let sleep = async () => {
    spinner.start()
    await new Promise((resolve) => setTimeout(resolve, 1000))
    spinner.stop()
}
await sleep()

let q: boolean = true
while (q) {

    let userChoice = await inquirer.prompt({
        type: "list",
        name: "userChoice",
        message: chalk.green("\nWhat do you want to do? "),
        choices: [
            chalk.yellowBright("Show Customer Info"),
            chalk.yellowBright("Check Balance"),
            chalk.yellowBright("Deposit"),
            chalk.yellowBright("Withdraw"),
            chalk.yellowBright("Exit")
        ]
    })

    async function GetAmount(): Promise<number> {
        let amount: { value: number } = await inquirer.prompt({
            type: "number",
            name: "value",
            message: "Enter Amount: "
        })

        spinner.start()
        await sleep()
        spinner.stop()

        return amount.value
    }

    switch (userChoice["userChoice"]) {
        case chalk.yellowBright("Show Customer Info"):
            await sleep()
            customer.CustomerInfo()
            break;
        case chalk.yellowBright("Check Balance"):
            await sleep()
            console.log(`\nYour Current Balance is: $${customer.bankAccount.AccountBalance}\n`)
            break;
        case chalk.yellowBright("Deposit"):
            await sleep()
            console.log(customer.bankAccount.Deposit(await GetAmount()))
            break;
        case chalk.yellowBright("Withdraw"):
            await sleep()
            console.log(customer.bankAccount.Withdraw(await GetAmount()))
            break;
        case chalk.yellowBright("Exit"):
            console.log("-------------------------------");
            console.log(chalk.blueBright("Thank You for Visiting My Bank"))
            console.log("-------------------------------");
            q = false
            break;
    }
}
