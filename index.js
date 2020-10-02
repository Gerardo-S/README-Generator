const fs = require("fs");
const inquirer = require("inquirer");

const questionAnswers = require("./utils/generateMarkdown.js");

// function to write README file
function writeToFile(response) {

    fs.writeFile("README2.md", questionAnswers(response), (err) => {
        if (err) {
            console.log(err)
            return console.log(err);
        }

        console.log("success")
        console.log(response.title)

    });

}

// function to initialize program
function init() {

    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "Specify title of README?"
        },

        {
            type: "input",
            name: "description",
            message: "Give a description of project:"
        },

        {
            type: "input",
            name: "installation",
            message: "What are the steps required to install your project?"
        },

        {
            type: "input",
            name: "usage",
            message: "Usage instructions?"
        },

        {
            type: "input",
            name: "credits",
            message: "Name collaborators:"
        },

        {
            type: "input",
            name: "contributing",
            message: "What are the guidelines for others to contribute?"
        },

        {
            type: "input",
            name: "tests",
            message: "What are ways to test application?"
        },

        {
            type: "input",
            name: "username",
            message: "GitHub UserName:"
        },

        {
            type: "input",
            name: "email",
            message: "Email:"
        },

        {
            type: "list",
            message: "Please choose a corresponding license from list below:",
            name: "license",
            choices: [
                "Apache 2.0 License",
                "BSD 3-Clause License",
                "ISC License (ISC)",
                "The MIT License",
                "The Unlicense"
            ]
        }

    ]).then(function (response) {

        if (response.license == "The MIT License") {

             badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
        }
        else if (response.license == "Apache 2.0 License"){

            badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"

        }
        else if (response.license == "BSD 3-Clause License"){

            badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"

        }
        else if (response.license == "ISC License (ISC)"){

            badge = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)"

        }
        else if (response.license == "The Unlicense"){

            badge = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)"

        };

        writeToFile(response);

    });


};

// function call to initialize program
init();
