const examples = require('./examples');

it(`this is test`, ()=>{
  expect(1 + 1).toBe(2);
});

describe('examples', () => {
  describe('getDistance()', () => {
    it('returns distance', () => {
      const p = { x: 0, y: 0 };
      const q = { x: 300, y: 400 };

      const result = examples.getDistance(p, q);
      expect(result).toBe(500);
    });
  });

  describe('addTax()', () => {
    it('returns price added tax', () => {
      const price = 100;

      const result = examples.addTax(price)
      expect(result).toBe(108);
    });
  });

  describe('capitalize()', () => {
    it('returns capitalized text', () => {
      const text = 'test';

      const result = examples.capitalize(text)
      expect(result).toBe('Test');
    });

    it(`does not return error`, ()=>{
      expect(examples.capitalize('')).toBe('');
    });
  });

  describe('snakeToCamel()', () => {
    it('returns cameled text', () => {
      const text = 'test_drink';

      const result = examples.snakeToCamel(text)
      expect(result).toBe('testDrink');
    });
    it(`does not return error`, ()=>{
      expect(examples.snakeToCamel('')).toBe('');
    });
  });

  describe('doSomethingOld()', () => {
    it('combine two strings', (done) => {
      examples.doSomethingOld('foo', 123, (error, result) => {
        expect(result).toBe('foo123');
        done();
      });
    });
  });

});