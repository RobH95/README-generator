import inquirer from 'inquirer';

let { firstName, lastName } = await inquirer.prompt([
  {
    type: 'input',
    name: 'firstName',
    message: "What's your first name"
  },
  {
    type: 'input',
    name: 'lastName',
    message: "What's your last name",
    default() {
      return 'Doe'
    }
  }
]);

'# Project Description'



console.log(firstName, lastName);
