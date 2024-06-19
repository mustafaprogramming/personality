#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.greenBright(`\n\n\t   _-^+-^+       ------       === o o 00 o o ===       ------       +^-+^-_`));
console.log(chalk.greenBright(`\t<==!~~ +*:-+- o({> ${chalk.blueBright.bold(` Welcome To Mustafa's - Personality Test`)} <})o -+-:*+ ~~!==>`));
console.log(chalk.greenBright(`\t   ‾-∨+-∨+       ------       === o o 00 o o ===        ------      +∨-+∨-‾\n\n\n`));
// Array for personality questions
let choices = ["Socialization gives you energy", "Being around people drains your energy", "love Socialization, but get tired after spending too much time around people.",];
class personalityChecker {
    personality;
    name;
    age;
    constructor(name, age) {
        this.personality = "";
        this.name = name;
        this.age = age;
    }
    personalityMaker = (personality) => {
        if (personality === choices[0]) {
            this.personality = "Extrovert";
        }
        else if (personality === choices[1]) {
            this.personality = "Introvert";
        }
        else if (personality === choices[2]) {
            this.personality = "Ambivert";
        }
    };
    getPersonality = () => {
        return this.personality;
    };
}
async function main() {
    let UserInfo = await inquirer.prompt([
        {
            type: "input",
            name: 'name',
            message: chalk.rgb(255, 145, 0)(`Enter Your Name: `)
        }, {
            type: "number",
            name: 'age',
            message: chalk.rgb(255, 145, 0)(`Enter Your Age: `)
        }, {
            type: "rawlist",
            name: 'preference',
            choices: choices,
            message: chalk.rgb(255, 145, 0)(`Enter What Discribes You The Best: `)
        }
    ]);
    if (UserInfo.name === "" || UserInfo.age === '' || Number.isNaN(UserInfo.age) || UserInfo.name.length >= 100 || UserInfo.name.length <= 0 || UserInfo.age >= 1000 || UserInfo.age <= 0) {
        console.log(chalk.redBright(`\n\t\t\tIncorrect Information\n`));
    }
    else {
        let User = new personalityChecker(UserInfo.name, UserInfo.age);
        User.personalityMaker(UserInfo.preference);
        setTimeout(async () => {
            let Question = await inquirer.prompt([
                {
                    type: "rawlist",
                    name: 'answer',
                    choices: [chalk.greenBright(`Yes`), chalk.red(`No`)],
                    message: chalk.rgb(255, 145, 0)(`Hello,${chalk.rgb(0, 0, 255)(UserInfo.name)} wanna know your Presonality? `)
                }
            ]);
            setTimeout(() => {
                if (Question.answer === chalk.greenBright(`Yes`)) {
                    console.log(chalk.rgb(0, 255, 0)(`\n\t\t\t\t\tYou are an ${User.getPersonality()}!\n`));
                }
                setTimeout(() => {
                    console.log(chalk.greenBright(`\n\n\t   _-^+-^+         ------          === o o 00 o o ===          ------         +^-+^-_`));
                    console.log(chalk.greenBright(`\t<==!~~ +*:-+- o({> ${chalk.blueBright.bold(` Thanks For Using Mustafa's - Personality Test`)} <})o -+-:*+ ~~!==>`));
                    console.log(chalk.greenBright(`\t   ‾-∨+-∨+         ------          === o o 00 o o ===          ------         +∨-+∨-‾\n\n\n`));
                }, 1000);
            }, 1000);
        }, 1000);
    }
}
setTimeout(main, 1000);
