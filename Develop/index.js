// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your application:',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD 3-Clause'],
      },
      {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error(err);
      } else {
        console.log('README file generated!');
      }
    });
  }
  function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeContent = generateMarkdown(answers);
      writeToFile('README.md', readmeContent);
    });
  }

  init();