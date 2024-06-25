const Circle = require('../lib/circle');

describe('Circle', () => {
    it('should render correctly', () => {
        const shape = new Circle();
        shape.setColor('blue');
        shape.setText('abc');
        shape.setTextColor('white');
        expect(shape.render()).toContain('<circle cx="150" cy="100" r="80" fill="blue" />');
        expect(shape.render()).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text>');
    });
});