
var frequencyNumber = require('./fn.js')
/*describe('split String to words', function(){

        it('return null given null', function(){
            expect(frequencyNumber.splitString('')).toEqual('');
        });

        it('return one word given one word ', function(){
            expect(frequencyNumber.splitString('it')).toEqual(['it']);
        });

        it('return two word given two word', function(){
            expect(frequencyNumber.splitString('it will')).toEqual(['it','will']);
        });

        it('return three word given three word ', function(){
            expect(frequencyNumber.splitString('it will get')).toEqual(['it', 'will', 'get']);
        });

        it('return two word given two word with some blanks', function(){
            expect(frequencyNumber.splitString('   it  will  ')).toEqual(['it','will']);
        });
    }
);

describe('count the Frequency of words',function () {

    it ('return one word and its frequency given one word', function () {
        expect(frequencyNumber.countFreqy(['it'])).toEqual("it 1");
    });

   it ('return two word and their own frequency given two different word', function () {
        expect(frequencyNumber.countFreqy(['it','is'])).toEqual("it 1\r\nis 1");
    });

    it ('return one word and their own frequency given two same word', function () {
        expect(frequencyNumber.countFreqy(['it','it'])).toEqual("it 2");
    });

});

describe ('sort the Frequency of the words',function(){

    it('return the result in sequence given the random result',function(){
        expect(frequencyNumber.sortFrequency([{word: 'it',count : 2},{word:'will',count:1}])).toEqual("will 1\r\nit 2");
    });

    it('return the result in sequence given the random result',function(){
        expect(frequencyNumber.sortFrequency([{word: 'it',count : 3},{word:'will',count:2},{word:'is', count: 1}])).toEqual("is 1\r\nwill 2\r\nit 3");
    });

});*/

describe('test for main',function(){
    it('return the result given the string ',function(){
        expect(frequencyNumber.main('it')).toEqual('it 1');
    });

    it('return the result given the string ',function(){
        expect(frequencyNumber.main('it will')).toEqual('it 1\r\nwill 1');
    });

    it('return the result given the string ',function(){
        expect(frequencyNumber.main('it will be it ')).toEqual('will 1\r\nbe 1\r\nit 2');
    });

    it('return the result given the string ',function(){
        expect(frequencyNumber.main('   it will it     ')).toEqual('will 1\r\nit 2');
    });
});