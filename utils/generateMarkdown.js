

// function to generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.title}
  ## Description
  ${questions.description}
  ## Table of Contents
  * [Installation](#Installation "Goto Installation")
  * [Usage](#Usage "Goto Usage")
  * [Contribution](#Contribution "Goto Contribution")
  * [Credits](#Credits "Goto Credits")
  * [Test](#Test "Goto Test")
  * [License](#License "Goto License")
  ## Installation
  ${questions.installation}
  ## Usage
  ${questions.usage}
  ## Credits
  ${questions.credits}
  ## Contributing
  ${questions.contributing}
  ## Tests
  ${questions.tests}
  ## License
  ${badge}<br>
  License: ${questions.license}
  ## Questions
  For additional questions you can reach me by<br>
  Email: ${questions.email} or <br>
  GitHub: <a href="https://github.com/${questions.username}">https://github.com/${questions.username}</a><br>
  
`;
}

module.exports = generateMarkdown;



// Custom table of contents will revisit
// * ${questions.tableOfContents.split(" ")[0]}
//   * ${questions.tableOfContents.split(" ")[1]}
//   * ${questions.tableOfContents.split(" ")[2]}
//   * ${questions.tableOfContents.split(" ")[3]}
  
