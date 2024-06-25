const inquirer = require('inquirer');
const fs = require('fs');
// const shape = require('./lib/shape');
const Circle = require('./lib/circle');
const Square = require('./lib/square');
const Triangle = require('./lib/triangle');

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

inquirer.prompt(questions).then(answers => {
    const {text, textColor, shape, shapeColor } = answers;

    let selectedShape;
    switch (shape) {
        case 'Circle':
            selectedShape = new Circle();
            break;
        case 'Square':
            selectedShape = new Square();
            break;
        case 'Triangle':
            selectedShape = new Triangle();
            break;
        default:
            throw new Error('Invalid shape type');
    }

    selectedShape.setColor(shapeColor);
    selectedShape.setText(text);
    selectedShape.setTextColor(textColor);

    const svgLogo = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${selectedShape.render()}
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text>
    </svg>
  `;

  fs.writeFile('logo.svg', svgLogo.trim(), err => {
    if (err) {
        console.error('Error writing SVG file:', err);
        return;
    }
    console.log('Generated logo.svg');
  });

});