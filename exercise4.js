//4. Declare an object that two properties, "numberOne", and "numberTwo", 
//and a function on that object called "addAllNumbers", 
//that returns the difference of numberOne minus numberTwo.

const minusObj = {
    numberOne: 6,
    numberTwo: 12,
    subtract(){
        return this.numberOne - this.numberTwo;
    }
}

console.log(minusObj.subtract());