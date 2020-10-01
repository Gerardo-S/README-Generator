

// function to generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.title}
  ## Description
  ${questions.description}
  ## Table of Contents
  * [Installation](#Installation "Goto Installation")
  * [Usage](#Usage "Goto Usage")
  * [Credits](#Credits "Goto Credits")
  * [License](#License "Goto License")
  
  ## Installation
  ${questions.installation}
  ## Usage
  ${questions.usage}
  ## License
  ${questions.license}
  ## Contributing
  ${questions.contributing}
  ## Tests
  ${questions.tests}
  ## Questions
  <$ href=${questions.username}>${questions.username}</$>
  


`;
}

module.exports = generateMarkdown;


// Custom table of contents will revisit
// * ${questions.tableOfContents.split(" ")[0]}
//   * ${questions.tableOfContents.split(" ")[1]}
//   * ${questions.tableOfContents.split(" ")[2]}
//   * ${questions.tableOfContents.split(" ")[3]}
  
