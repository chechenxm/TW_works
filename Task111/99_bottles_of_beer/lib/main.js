function  countBottles(number){
    var string='';
    if(number === '')return string;
    for(var i = number;i>1;i-- ){
        if(i === 2){
            string += '2 bottles of beer on the wall, 2 bottles of beer.\n' +
                'Take one down and pass it around, 1 bottle of beer on the wall.\n';
            break;
        }
        else{
            string += i+' bottles of beer on the wall, '+i+' bottles of beer.\n' +
                'Take one down and pass it around, '+(i-1)+' bottles of beer on the wall.\n';
        }

    }
    string +='1 bottle of beer on the wall, 1 bottle of beer.\n' +
        'Take one down and pass it around, no more bottles of beer on the wall.\n' +
        'No more bottles of beer on the wall, no more bottles of beer.\n' +
        'Go to the store and buy some more, 99 bottles of beer on the wall.';

        return string;
}

module.exports = countBottles;
