const Shape = require('./shape');

class Circle extends Shape {
    render() {
        return `
        <circle cx="150" cy="100" r="80" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      `;
    }
}

module.exports = Circle;