const Square = require('../lib/square');

describe('Square', () => {
    it('should render correctly', () => {
        const shape = new Square();
        shape.setColor('blue');
        shape.setText('abc');
        shape.setTextColor('white');
        expect(shape.render()).toContain('<rect x="70" y="20" width="160" height="160" fill="blue" />');
        expect(shape.render()).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text>');
    });
});    
