const Shape = require('./shape');

class Square extends Shape {
    render() {
        return`
      <rect x="70" y="20" width="160" height="160" fill="${this.color}" />
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    `;
    }
}

module.exports = Square;