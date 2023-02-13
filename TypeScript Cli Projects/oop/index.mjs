#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
class Person {
    personality;
    constructor() {
        this.personality = "Mystery";
    }
    AskQuestion(ans) {
        if (ans === 1) {
            this.personality = "Extravert";
        }
        else if (ans === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "still a Mystery";
        }
    }
    GetPersonality() {
        return this.personality;
    }
}
class Student extends Person {
    _name;
    constructor() {
        super();
        this._name = "";
    }
    get Name() {
        return this._name;
    }
    set Name(value) {
        this._name = value;
    }
}
class Program {
    async Main() {
        let input = await inquirer.prompt({
            type: "number",
            name: "input",
            message: chalk.yellowBright("Type 1 if you like to talk to others and Type 2 if you like to keep to yourself")
        });
        let MyPerson = new Person();
        MyPerson.AskQuestion(input["input"]);
        console.log("You are:", MyPerson.GetPersonality());
        let input2 = await inquirer.prompt({
            type: "input",
            name: "input",
            message: chalk.blueBright("What is Your Name:")
        });
        let MyStudent = new Student();
        MyStudent.Name = input2["input"];
        console.log(chalk.cyanBright("Your Name is"), MyStudent.Name, chalk.greenBright("and Your personality is"), MyPerson.GetPersonality());
    }
}
(new Program()).Main();
