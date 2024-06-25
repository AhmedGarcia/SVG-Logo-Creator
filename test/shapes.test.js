const Shape = require('../lib/shape');

describe('Shape', () => {
    it('should set color correctly', () => {
        const shape = new Shape();
        shape.setColor('red');
        expect(shape.color).toBe('red');
    });

    it('should throw an error if text is more than three characters', () => {
        const shape = new Shape();
        expect(() => shape.setText('abcd')).toThrow('Text must be up to three characters long.');

    });

    it('should set text correctly if it is 3 characters or less', () => {
        const shape = new Shape();
        shape.setText('abc');
        expect(shape.text).toBe('abc');
    });

    it('should set text color correctly', () => {
        const shape = new Shape();
        shape.textColor('blue');
        expect(shape.textColor).toBe('blue');
    });

    it('should throw an error when render is not implemented', () => {
        const shape = new Shape();
        expect(() => shape.render()).toThrow('Child class must implement render() method')
    });
});
