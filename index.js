const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./util/template.js');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Please enter your Github username (required)',
            validate: nameInput => {
                if (!nameInput) {
                    console.log('Please enter your username.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'what is the title of this project (required)',
            validate: titleInput => {
                if (!titleInput) {
                    console.log('Please the project title.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please add a description of this project (required)',
            validate: descriptionInput => {
                if (!descriptionInput) {
                    console.log('Please a description.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'please enter your email (required)',
            validate: emailInput => {
                if (!emailInput) {
                    console.log('Please enter your email.');
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please add installation instructions for this project'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'what will this project be used for?'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'please add some contribution guidelines'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How should this project be tested?'
        },
        {
            type: 'input',
            name: 'questions',
            message: 'How would you like to recieve questions concerning this project'
        },
        {
            type: 'list',
            name: 'license',
            message: 'what license is this project using?',
            choices: ['GNU', 'MIT', 'ISC', 'No License']
        }

    ])
}

promptUser()
    .then(data => {
        generatePage(data);
    });

