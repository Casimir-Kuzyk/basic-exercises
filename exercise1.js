//1. Declare a function that takes 4 arguments, and adds them all together, and returns the sum.

function adder(arg1,arg2,arg3,arg4){
    if (typeof arg1 !== 'number' || typeof arg2 !== 'number' || typeof arg3 !== 'number' || typeof arg4 !== 'number'){
        console.log('Arguments have to be numbers');
    } else {
        const result = arg1+arg2+arg3+arg4;
        console.log(result);
        return result;
    }
}

adder(5,7,2,4);
adder('fsa',25,'wt',35);