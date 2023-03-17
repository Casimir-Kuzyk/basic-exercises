//2. Declare a function that takes two arguments, 
//and if the first argument is greater than the second one, return true, otherwise return false.

function compare(arg1,arg2){
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number'){
        console.log('input arguments must be numbers');
    } else {
        if (arg1 >= arg2){
            console.log(arg1 + ' is greater than or equal to ' + arg2);
            return true;
        } else {
            console.log(arg1 + ' is less than ' + arg2);
            return false;
        }
    }
}

compare(15,2);
compare(15,87);
compare(false,'e');
