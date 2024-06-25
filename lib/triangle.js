const Shape = require('./shape');

class Triangle extends Shape {
    render() {
        return `
      <polygon points="150,18 244,182 56,182" fill="${this.color}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    `;
    }
}

module.exports = Triangle;