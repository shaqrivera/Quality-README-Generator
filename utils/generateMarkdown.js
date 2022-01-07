
const renderLicenseBadge = function (answers){
    if (answers.license === 'GNU General Public License v3.0'){
      let badge = 'GPL';
      return badge
    }
    else if (answers.license === 'MIT License'){
      let badge ='MIT';
      return badge
    }
    else {
      let badge = 'Apache';
      return badge
    }
}

const renderLicenseLink = function(answers){
  if (answers.license === 'GNU General Public License v3.0'){
    let link = 'https://spdx.org/licenses/GPL-3.0-or-later.html';
    return link
  }
  else if (answers.license === 'MIT License'){
    let link ='https://spdx.org/licenses/MIT.htm';
    return link
  }
  else {
    let link = 'https://spdx.org/licenses/Apache-2.0.html';
    return link
  }
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(answers){
  let badge = renderLicenseBadge(answers);
  let link = renderLicenseLink(answers);
  return `![license badge](https://img.shields.io/badge/license-${badge}-blue)
  # ${answers.projectTitle}
  ## Description
  ${answers.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  - [License](#license)
  ## Installation
  ${answers.installInstructions}
  ## Usage
  ${answers.usageInstructions}
  
  ## Contributing
  ${answers.contribution}
  ## Tests
  ${answers.testInstructions}
  
  ## Questions
  Github username : ${answers.githubUsername}
  
  If you have any questions, please submit inquiries to ${answers.emailAddress}.
  
  ##License
  This project is using the ${answers.license}. For more information, refer to following link.
    [${answers.license}](${link})
  ---`

};

module.exports = {generateMarkdown: generateMarkdown, renderLicenseBadge: renderLicenseBadge, renderLicenseLink: renderLicenseLink};
