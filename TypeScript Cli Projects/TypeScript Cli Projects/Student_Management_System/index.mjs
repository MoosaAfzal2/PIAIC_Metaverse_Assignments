#!/usr/bin/env node
import chalk from "chalk";
import fs from "fs";
import inquirer from "inquirer";
import chalkAnimation from "chalk-animation";
const sleep = () => new Promise((resolve) => setTimeout(resolve, 1500));
const rainbowTitle = chalkAnimation.rainbow("    STUDENT MANAGEMENT SYSTEM By Moosa Afzal   ");
await sleep();
rainbowTitle.stop();
console.log("-------------------------------------------------");
// input for name
let student_name = await inquirer.prompt({
    type: "input",
    name: "Name",
    message: chalk.greenBright("Please Enter Your Name or ID(If you are already enrolled): "),
    validate: (input) => {
        if (input === "") {
            return "Please Enter a Correct Value";
        }
        return true;
    }
});
// read old data from json file
let json = fs.readFileSync("Students.json", "utf-8");
let data = JSON.parse(json);
// for Checking if Student already exist or not And Showing Status
let includes_name = false;
for (let i in data) {
    if ((student_name.Name).toUpperCase() === ("PIAIC" + data[i].Student_ID)) {
        includes_name = true;
        // The below code shows Student Status
        console.log(`Welcome Back Student ${data[i]["Name"]}, Your Current Status is:`);
        console.log(`${chalk.yellowBright("Student_ID")}: PIAIC${data[i]["Student_ID"]}`);
        console.log(chalk.yellowBright("Enrolled Course:"), data[i]["Course"]);
        if (data[i]["Tution Fee"]) {
            console.log(chalk.yellowBright("Tuition Fee:"), "Paid");
        }
        else {
            console.log(chalk.yellowBright("Tuition Fee:"), "Not Paid");
        }
        console.log(`${chalk.yellow("Your Current Balance:")} ${data[i]["Balance"]}$`);
    }
}
// if the student is new then this function ask for course to be enrolled in
if (!includes_name) {
    await inquirer.prompt([{
            type: "list",
            name: "Course",
            message: "Choose a course to be enrolled: ",
            choices: ["AI", "CNC", "BCC", "IOT"]
        }, {
            type: "confirm",
            name: "Tution Fee",
            message: "Have You Paid the Tuition Fee"
        }]).then((std) => {
        // by using the student_name variable remaking an object to pass into json file
        let Student = {
            "Name": (student_name.Name).toUpperCase(),
            "Student_ID": Math.round(Math.random() * 93939),
            "Course": std["Course"],
            "Tution Fee": std["Tution Fee"],
            "Balance": 1000
        };
        // write new data
        data.push(Student);
        let newdata = JSON.stringify(data);
        fs.writeFileSync("Students.json", newdata, "utf-8");
        console.log("You have been enrolled Successfully");
        console.log(`Your Student_ID for ${Student["Course"]} Course is PIAIC${Student["Student_ID"]}`);
        console.log(`Your Current Student Balance is ${Student['Balance']}$`);
    });
}
let Functionality = async () => {
    let q = true;
    while (q) {
        let userChoice = await inquirer.prompt({
            type: "list",
            name: "userChoice",
            message: chalk.green("\nWhat do you want to do? "),
            choices: [
                chalk.yellowBright("Show Student Info"),
                chalk.yellowBright("Check Balance"),
                chalk.yellowBright("Add Student Balance"),
                chalk.yellowBright("Pay Tuition Fee"),
                chalk.yellowBright("Exit")
            ]
        });
        switch (userChoice["userChoice"]) {
            case chalk.yellowBright("Show Customer Info"):
                await sleep();
                break;
            case chalk.yellowBright("Check Balance"):
                await sleep();
                break;
            case chalk.yellowBright("Add Student Balance"):
                await sleep();
                break;
            case chalk.yellowBright("Pay Tuition Fee"):
                await sleep();
                break;
            case chalk.yellowBright("Exit"):
                console.log("-------------------------------");
                console.log(chalk.blueBright("Thank You for Using The System"));
                console.log("-------------------------------");
                q = false;
                break;
        }
    }
};
