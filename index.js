// code for reference 
const fs = require("fs");
const inquirer = require("inquirer");
let input = process.argv.slice(2);

const questionAnswers = require("./utils/generateMarkdown.js");

// pseudo code
// Ask user questions to generate a README file 
// Ask for Title?
// Ask for Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions
// pseudo code
// ======================================================================== 


// Use Template_Literals to do the following
// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information,
// contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled
// Description, Installation, Usage, Contributing, and Tests
// ==================================================================================

// Use inquire to complete the following
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added hear the top of the README and a
// notice is added to the section of the README entitled License that explains
// which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link
// to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with
// instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README


// Johns tips 
// array of questions for user
// const questions = {
//     title: "README Generator",
//     description:This application will generate a quality README.md file with the following sections title, description, table of contents, installation, usage, license, contributing, tests, and  questions.,
// }



;

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

        

        // {
        //   type: "list",
        //   message: "What is your preferred method of communication?",
        //   name: "tableOfContents",
        //   choices: [
        //     "email",
        //     "phone",
        //     "telekinesis"
        //   ]
        // }
    ]).then(function (response) {

        writeToFile(response);

    });


};

// function call to initialize program
init();
