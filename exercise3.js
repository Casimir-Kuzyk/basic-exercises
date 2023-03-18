//3. Declare a function that takes a single argument, an array of numbers, 
//and loops over all the elements of the array, adding them together, 
//and returning the total sum of all the elements in the array.

function addArray(inarray){
    if (Array.isArray(inarray)){
        let arraysum = 0;
        for (let i = 0; i<inarray.length;i++){
            arraysum = arraysum + inarray[i];
        }
        console.log(arraysum);
        return arraysum;
    } else {
        console.log('The argument must be an array');
    }
}

addArray([5,6,7,8]);