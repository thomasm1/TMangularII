// testing functions in app.js
// objs = {a, jasmineTest,cccc, fx, multiply };

objs = require('../appTest.js');
a = objs.a; 
cccc = objs.cccc;
 

describe("Multiply suite", function() {
    
    it("contains spec with an multiply expectation", function() {
       // expect(true).toBe(true);
      
        expect(objs.multiply).toBe(4); 
    });
});

describe("A suite", function() {
    it("contains spec with an expectation", function() {
       // expect(true).toBe(true);
        expect(a).toBe(true);
        expect(objs.jasmineTest).not.toBe(false);
        expect(cccc).toBe('cccc');
    });
});

describe("B suite", function() {
    it("contains fucntion with constructor expectation", function() {
      //  expect(true).toBe(true);
       
        expect(a).not.toBe(false);
        expect (objs.jasmineTest).toBe(true);
        expect(objs.fx.title).toBe(this.title);
        expect(objs.fx.body).toBe(this.body);

    });
});
