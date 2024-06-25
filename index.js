const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle} = require('./lib/shape');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to three characters for the logo:',
        validate: input => input.length <= 3 || 'Text must be up to three characters long',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color (color keyword or hexadecimal):',
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose a shape for the logo:',
        choices: ['Circle', 'Square', 'Triangle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (color keyword or hexadecimal):',
    },
];

inquirer.createPromptModule(questions).then(answers => {
    const {text, textColor, shape, shapeColor } = answers;
})