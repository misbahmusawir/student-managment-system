#! usr/bin/enc node 
import inquirer from "inquirer";
import chalk from "chalk";
//Introduction
console.log(chalk.hex(`#1679AB`).bold("WELLCOME TO STUDENT MANAGMENT SYSTEM"));
// Generating 5 digit unique studentId
const randomNumber = Math.floor(10000 + Math.random() * 90000);
console.log(chalk.hex(`#FF8F00`).italic(`Your student id is:${randomNumber}`));
// Generating Random number for balance
let myBalance = Math.floor(10000 + Math.random() * 1000);
// Enrolling student in a given course 
let answer = await inquirer.prompt([
    {
        name: "students",
        type: "input",
        message: "Enter student name:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non_empty value,";
        }
    },
    {
        name: "courses",
        type: "list",
        message: "select the course to enrolled",
        choices: [
            "Web Development",
            "Digital Marketing",
            "Graphic Designing",
            "Mobile Application",
        ]
    }
]);
// Setting up fees acording to the course
const tutionFee = {
    "Web Development": 5000,
    "Digital Marketing": 3000,
    "Graphic Designing": 1000,
    "Mobile Application": 2000
};
console.log(chalk.hex(`FFD0D0`)(`\nTution fees:${tutionFee[answer.courses]}/-\n`));
// View balance
console.log(chalk.hex(`#AF47D2`)(`Your Balance is :${myBalance}\n`));
// Selecting payment method and Paying course fees
let paymentType = await inquirer.prompt([
    {
        name: "payment",
        type: "list",
        message: "Select payment method",
        choices: ["Bank Transfer", "Easy paisa", "Jazz cash"]
    },
    {
        name: "amount",
        type: "input",
        message: "Transfer Money:",
        validate: function (value) {
            if (value.trim() !== "") {
                return true;
            }
            return "Please enter a non_empty value.";
        }
    }
]);
console.log(chalk.hex(`86B6F6`)(`\n You select payment method ${paymentType.payment}\n`));
const tutionFees = tutionFee[answer.courses];
const paymentAmount = parseFloat(paymentType.amount);
if (tutionFees === paymentAmount) {
    console.log(chalk.hex(`AF8260`).bold(`Congratulations you have successfully enrolled in ${answer.courses}.\n`));
    // View status
    let ans = await inquirer.prompt([
        {
            name: "Select",
            type: "list",
            message: "What would you like to do next?",
            choices: ["view status", "Exit"]
        }
    ]);
    if (ans.select === "view status") {
        console.log("\n*******status*******\n");
        console.log(`Student Name ${answer.status}`);
        console.log(` Student ID: ${randomNumber}`);
        console.log(`Course:  ${answer.courses}`);
        console.log(`Tution Fees Paid ${paymentAmount}`);
        console.log(`Balance ${myBalance += paymentAmount}`);
    }
    else {
        console.log(chalk.hex(`#40A578`).bold("\nExiting Student Managment System\n"));
    }
}
else {
    console.log(chalk.red("Invalid amount due to course\n"));
}
9;
