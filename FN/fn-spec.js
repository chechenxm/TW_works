
var splitString = require('./fn.js')
describle('split String to words', function(){
        it('test1', function(){
                expect(splitString.splistString('it has it')).tobe(['it','has','it']);
            }
        );
    }
);