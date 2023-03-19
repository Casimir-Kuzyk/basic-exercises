//7. Declare an object that has a single property, "clothes", which is an empty array,
// a function on that object called "putOnClothes" which take a single argument, 
//an item of clothes you want to put on (which will be a string, like "hat"). 
//If the object is already wearing that piece of clothing, throw an error, 
//otherwise, add the clothes to the array and log out the new clothes array.

const closet = {
    clothes: [],
    putOnClothes: function(clothing){
        if (this.clothes.includes(clothing)){
            throw new Error('you are already wearing that!');
        } else if (typeof clothing == 'string'){
            this.clothes.push(clothing);
            console.log('You just put on a ' + clothing);
        } else {
            console.log('You must enter a string clothing item to wear it..');
        }
        return this.clothes;
    }
}

closet.putOnClothes('shirt');
closet.putOnClothes('tie');
closet.putOnClothes('pants');
console.log(closet.clothes);
closet.putOnClothes('tie');
