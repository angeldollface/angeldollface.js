#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");
const fs = require('fs');
const request = require('request');
const path = require('path');
const ora = require('ora');
const cliSpinners = require('cli-spinners');
clear();

function main(){
    clear();
    const prompt = inquirer.createPromptModule();
    const data = {
        name: chalk.bold.green("             Angel Dollface"),
        handle: chalk.white("@angeldollface"),
        currentOccupation: `${chalk.white("Student at")} ${chalk
            .hex("#2b82b2")
            .bold("University of Vienna")}`,
        github: chalk.gray("https://github.com/") + chalk.green("angeldollface"),
        web: chalk.cyan("https://angeldollface.boo"),
        npx: chalk.red("npx") + " " + chalk.white("angeldollface"),
    
        labelOccupation: chalk.white.bold("     Occupation:"),
        labelGitHub: chalk.white.bold("     GitHub:"),
        labelWeb: chalk.white.bold("        Web:"),
        labelCard: chalk.white.bold("       Card:")
    };
    const questions = [
        {
            type: "list",
            name: "action",
            message: "What you want to do?",
            choices: [
                {
                    name: `Send me an ${chalk.green.bold("email")}?`,
                    value: () => {
                        open("mailto:officialrealalexanderabraham@gmail.com");
                        console.log("\nDone, see you soon at inbox.\n");
                    }
                },
                {
                    name: `Reach out to me on ${chalk.redBright.bold("Twitter")}?`,
                    value: () => {
                        open('https://twitter.com/angeldollface66');
                        console.log("\n Let's have a chat! \n");
                    }
                },
                {
                    name: "I gotta go.",
                    value: () => {
                        console.log("Have a nice day! <3\n");
                    }
                }
            ]
        }
    ];
    const me = boxen(
        [
            `${data.name}`,
            `${data.labelOccupation}  ${data.currentOccupation}`,
            `${data.labelGitHub}  ${data.github}`,
            `${data.labelWeb}  ${data.web}`,
            `${data.labelCard}  ${data.npx}`,
            ``,
            `${chalk.italic(
                "My inbox is always open. Whether you have a")}`,
            `${chalk.italic(
                "question or just want to say hi, I will try ")}`,
            `${chalk.italic(
                "my best to get back to you!")}`
        ].join("\n"),
        {
            margin: 1,
            float: 'center',
            padding: 1,
            borderStyle: "single",
            borderColor: "green"
        }
    );
    
    console.log(me);
    const tip = [
        `Tip: Try ${chalk.cyanBright.bold(
            "cmd/ctrl + click"
        )} on the links above`,
        '',
    ].join("\n");
    console.log(tip);
    
    prompt(questions).then(answer => answer.action());    
}

main();