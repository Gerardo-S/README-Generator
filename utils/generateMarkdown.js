

// function to generate markdown for README
function generateMarkdown(questions) {
  return `# ${questions.title}
  ## Description
  ${questions.description}
  ## Table of Contents
  ${splitQuestions = questions.tableOfContents.split(" ").forEach(

    function(){return "*" + splitQuestions }
    
  )}
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
  <a href=${questions.username}>${questions.username}</a>
  


`;
}

module.exports = generateMarkdown;

// ## Table of Contents
  // * ${questions.tableOfContents.split(" ")[0]}
  // * ${questions.tableOfContents.split(" ")[1]}
  // * ${questions.tableOfContents.split(" ")[2]}