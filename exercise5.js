//5. Declare an array that takes in a single argument, a string, 
//and returns the string lower-cased. ie: I pass in "Crane Juice", it should return "crane juice".

//Not sure if I don't understand the question, but I'm going to assume that I want to declare a function 
//that will take an array with  1 string and change it into a lower case string.

function toLower(inarray){
    if (Array.isArray(inarray)){
        console.log(inarray[0].toLowerCase())
        return inarray[0].toLowerCase();
    } else {
        console.log('must input an array');
    }

}

const craneArray = ['Crane Juice'];
toLower(craneArray);