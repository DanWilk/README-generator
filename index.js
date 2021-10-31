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
            message: 'What is the title of this project (required)',
            validate: titleInput => {
                if (!titleInput) {
                    console.log('Please enter the project title.');
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
            message: 'Please enter some usage information?'
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Please add some contribution guidelines'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How should this project be tested?'
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license is this project using?',
            choices: ['GNU', 'MIT', 'ISC', 'No License']
        }

    ])
}

promptUser()
    .then(data => {
        return generatePage(data);
    })
    .then( page => {
        return new Promise((resolve, reject)=> {
            fs.writeFile('./dist/README.md', page, err => {
                if (err) {
                    reject(err);
                    return;
                }
    
                resolve({
                    ok: true,
                    message: 'File created!'
                });
            });
        });
    });

