const inquirer = require("inquirer");
const generator = require('./utils/generateMarkdown');
const fs = require('fs');


const questions = [{
    type: 'input',
    name: 'projectTitle',
    message: `Enter your project's title`
},
{
    type: 'input',
    name: 'description',
    message: `Enter a description of your project`
},
{
    type: 'input',
    name: 'installInstructions',
    message: `Enter any instructions necessary to install your project`
},
{
    type: 'input',
    name: 'usageInstructions',
    message: `Enter instructions on how to use your project`
},
{
    type: 'input',
    name: 'contribution',
    message: `Define guidelines on how people can contribute to your project`
},
{
    type: 'input',
    name: 'testInstructions',
    message: `How can users test your application?`
},
{
    type: 'input',
    name: 'githubUsername',
    message: `What is your github username?`
},
{
    type: 'input',
    name: 'emailAddress',
    message: `What is your email address?`
},
{
    type: 'list',
    name: 'license',
    message: `Choose a license for your project`,
    choices: ['GNU General Public License v3.0', 'MIT License', 'Apache License 2.0']
}];


const userPrompt = () => inquirer.prompt(questions);
userPrompt()
.then(
    (answers) => {
        let customFile = generator.generateMarkdown(answers);
        fs.writeFile('autoREADME.md',customFile,(err) =>
          err ? console.error(err) : console.log('Success!'))
    }
);
