const Shape = require('./shape');

class Triangle extends Shape {
    render() {
        return `
      <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        <polygon points="150,18 244,182 56,182" fill="${this.color}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
      </svg>
    `;
    }
}

module.exports = Triangle;