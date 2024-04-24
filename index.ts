#! /usr/bin/env node

// Importing Inquirer for Input
import inquirer from "inquirer";

// Creating questions for User Input
let answer = await inquirer.prompt([
  { message: "Enter your first number", type: "number", name: "firstNumber" },
  { message: "Enter your second number", type: "number", name: "secondNumber" },
  {
    message: "Please choose the opertaion you want to perform",
    type: "list",
    name: "operations",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  }
]);

// Calculation

if (answer.operations === "Addition") {
    let result = answer.firstNumber + answer.secondNumber;
    console.log("Your result is " + result);
} else if (answer.operations === "Subtraction") {
    let result = answer.firstNumber - answer.secondNumber;
    console.log("Your result is " + result);
} else if (answer.operations === "Multiplication") {
    let result = answer.firstNumber * answer.secondNumber;
    console.log("Your result is " + result);
} else if (answer.operations === "Division") {
    let result = answer.firstNumber / answer.secondNumber;
    console.log("Your result is " + result);
}