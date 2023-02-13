#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import ora from "ora";
const sleep = () => new Promise((resolve) => setTimeout(resolve, 1500));
const rainbowTitle = chalkAnimation.rainbow("    ADVENTURE GAME By Moosa Afzal   ");
await sleep();
rainbowTitle.stop();
let delay = async (action, time = 1000, color = "#00FF00") => {
    const spinner = ora(chalk.hex(color).bold(action));
    spinner.color = "magenta";
    spinner.start();
    await new Promise((resolve) => setTimeout(resolve, time));
    spinner.stop();
};
console.log("---------------------------");
console.log(chalk.magentaBright("Welcome to the Dungeon!"));
console.log("---------------------------");
let Health = 100;
let AttackDamage = 30;
let HealthPotionNumber = 2;
let HealthPotionHeal = 30;
async function AdventureGame() {
    let HealthPotionDropChance = Math.round(Math.random() * 100);
    let enemies = ["Skeleton", "Goblin", "Assassin", "Orc"];
    let Enemy = enemies[Math.floor(Math.random() * enemies.length)];
    let enemyHealth = (Math.round(Math.random() * 100)) + 50;
    let EnemyAttackDamage = Math.round(Math.random() * 10) + 10;
    console.log(chalk.redBright(`A ${Enemy} has Appeared!`));
    while (enemyHealth > 0) {
        await delay("");
        console.log(`Your Health: ${chalk.greenBright(Health)}`);
        console.log(`Enemy Health: ${chalk.redBright(enemyHealth)} \n`);
        let userChoice = await inquirer.prompt({
            name: "UserChoice",
            type: "list",
            message: "What would you like to do?",
            choices: [
                chalk.yellowBright("Attack"),
                chalk.greenBright("Drink Potion"),
                chalk.hex("#FFA500").bold("run!")
            ]
        });
        switch (userChoice.UserChoice) {
            case chalk.yellowBright("Attack"):
                await delay("Attacking...", 1500);
                console.log(chalk.green(`You have Attacked the Enemy for ${AttackDamage} Damage`));
                await delay("The Enemy is retaliating...", 1500, "#FF0000");
                console.log(chalk.red(`The ${Enemy} retaliates for ${EnemyAttackDamage} Damage\n`));
                Health -= EnemyAttackDamage;
                enemyHealth -= AttackDamage;
                break;
            case chalk.greenBright("Drink Potion"):
                await delay("Drinking Potion...");
                if (HealthPotionNumber > 0) {
                    Health += HealthPotionHeal;
                    console.log(`You Healed ${HealthPotionHeal} Amount\n`);
                    HealthPotionNumber--;
                }
                else {
                    console.log("You do not have enough Potion");
                }
                break;
            case chalk.hex("#FFA500").bold("run!"):
                await delay("Running...", 1500);
                console.log(chalk.redBright("You ran Out of the Dungeon cowardly!"));
                enemyHealth = 0;
                return;
        }
        if (Health <= 0) {
            console.log("You Died!");
            console.log("-----------------------");
            console.log(chalk.blueBright("Thank You For Playing!!"));
            console.log("-----------------------");
            break;
        }
    }
    if (enemyHealth <= 0) {
        console.log(chalk.green("You have Successfully Defeated the Enemy"), chalk.red(Enemy));
        if (HealthPotionDropChance > 70) {
            console.log(chalk.hex("#FFD700").bold("You have Gained an health Potion as a Reward"));
            HealthPotionNumber++;
        }
        if (Health <= 0) {
            console.log("You Died!");
            console.log("-----------------------");
            console.log(chalk.blueBright("Thank You For Playing!!"));
            console.log("-----------------------");
        }
        else {
            await PlayAgain();
        }
    }
}
let PlayAgain = async () => {
    let choice = await inquirer.prompt({
        name: "PlayAgain",
        type: "list",
        message: "What do you want to do Now?",
        choices: ["Keep Exploring!", "Exit The Dungeon"]
    });
    switch (choice.PlayAgain) {
        case "Keep Exploring!":
            if (Health > 0) {
                await delay("Re-entering The Dungeon...", 2000);
                await AdventureGame();
            }
            break;
        case "Exit The Dungeon":
            console.log("-----------------------");
            console.log(chalk.blueBright("Thank You For Playing!!"));
            console.log("-----------------------");
            break;
    }
};
await AdventureGame();
