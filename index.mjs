import inquirer from 'inquirer';

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
        type: 'list',
        name: 'license',
        message: 'Please choose a license for your project:',
        choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0'],
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
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
];

function generateREADME(answers) {
    return `
  # ${answers.title}
  
  ## Description
  
  ${answers.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  
  ${answers.installation}
  
  ## Usage
  
  ${answers.usage}
  
  ## License
  
  ![${answers.license} License](https://img.shields.io/badge/License-${answers.license}-blue.svg)
  
  This project is covered under the ${answers.license} license.
  
  ## Contributing
  
  ${answers.contributing}
  
  ## Tests
  
  ${answers.tests}
  
  ## Questions
  
  For additional questions, please contact ${answers.githubUsername} at ${answers.email}.
  `;
}

/*
inquirer.prompt(questions).then((answers) => {
    const README = generateREADME(answers);
    console.log(README);
});
*/


import fs from 'fs';

inquirer.prompt(questions).then((answers) => {
    const README = generateREADME(answers);
    fs.writeFile('README-generated.md', README, (err) => {
        if (err) throw err;
        console.log('README.md file created successfully!');
    });
});




// import inquirer from 'inquirer';

// let { firstName, lastName } = await inquirer.prompt([
//   {
//     type: 'input',
//     name: 'firstName',
//     message: "What's your first name"
//   },
//   {
//     type: 'input',
//     name: 'lastName',
//     message: "What's your last name",
//     default() {
//       return 'Doe'
//     }
//   }
// ]);

// '# Project Description'



// console.log(firstName, lastName);
