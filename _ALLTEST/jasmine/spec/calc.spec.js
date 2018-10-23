cal = require('../src/calc.js');
add = cal.add;
sub = cal.sub;

describe('add', function() {
    it('should add two numbers', function() {
        expect(add(1,2)).toBe(3);
    });
});

describe('sub', function() {
    it('should s two numbers', function() {
        expect(sub(1,2)).toBe(-1);
    });
});