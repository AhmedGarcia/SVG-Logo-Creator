class Shape {
    constructor() {
      this.color = '';
      this.text = '';
      this.textColor = '';
    }
  
    setColor(color) {
      this.color = color;
    }
  
    setText(text) {
      if (text.length > 3) {
        throw new Error('Text must be up to three characters long.');
      }
      this.text = text;
    }
  
    setTextColor(color) {
      this.textColor = color;
    }
  
    render() {
      throw new Error('Child class must implement render() method.');
    }
  }
  
  module.exports = Shape;
  