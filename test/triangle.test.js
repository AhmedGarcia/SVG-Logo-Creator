const Triangle = require('../lib/triangle');

describe('Triangle', () => {
    it('should render correctly', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        shape.setText('abc');
        shape.setTextColor('white');
        expect(shape.render()).toContain('<polygon points="150,18 244,182 56,182" fill="blue" />');
        expect(shape.render()).toContain('<text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text>');

    });
});