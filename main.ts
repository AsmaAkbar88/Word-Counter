#! /usr/bin/env node 

// Import the "inquirer" module while is a command line interface for nodejs

import inquirer from "inquirer"

import chalk from "chalk"

// Declare a constant 'answer' and assign it to the result of inquirer.prompt function

const answer: { sentence: string } = await inquirer.prompt(
    [
        {
            name: "sentence",
            type: "input",
            message: chalk.redBright(" \n Enter your Sentence to count the word: ")
        }
    ]
);
const words = answer.sentence.trim().split(" ")

// Print the array of words to the console 

console.log(words)

// print the word  count of the sentence to the console 

console.log(chalk.yellowBright(` \n Your Sentence Word Count is ${chalk.blueBright(words.length)}`));