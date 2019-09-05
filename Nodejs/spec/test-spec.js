var Sum = require('./sum.js');
describe('basic tests', function(){   
    it('test sample', function(){   
        expect(Sum.sum(3,4)).toBe(7);  
     });  
});