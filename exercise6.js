//6. Declare a function that checks if an element is in an array. 
//It takes two arguments, the array, and the element to look for. 
//If the element is found, return true, otherwise, return false.

function searchArray(array,term){
    if (Array.isArray(array)){
        for (let i = 0;i<=array.length;i++){
            if (array[i] == term){
                console.log(term + ' is in the array ' + array);
                return true;
            }
        }
        console.log(term + ' is not in the array ' + array);
        return false;
    } else {
        console.log('you must enter an array to check..');
    }
}

searchArray([5,6,34,235,5325,6346,344,532,23,3],235);
searchArray([5,6,7,8,9],20);
searchArray('hello',5);