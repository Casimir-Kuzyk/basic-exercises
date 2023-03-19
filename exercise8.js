//8. Declare a function that takes in a single argument, a name, 
//and then says hi to that name via the console, 
//UNLESS that name is one of the leaver's names: tums, piccle, or interesting, 
//in which case it instead tells that user to fuck off via the console.

function sayhi(name){
    if (name.toLowerCase() === 'tums' || name.toLowerCase() === 'piccle' || name.toLowerCase() === 'interesting'){
        console.log('fuck off ' + name);
    } else {
        console.log('Hi ' + name);
    }
}

sayhi('Jeff');
sayhi('tums');