'use strict';
function makeArray(firstArray, secondArray, maxLength) {
    let newArray = firstArray.concat(secondArray);
    if (newArray.length > maxLength) {
        newArray = newArray.slice(0, maxLength);
    } else {
        newArray = newArray.slice(0, newArray.length);
    }
    return newArray;
}
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3));
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4));
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); 
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0));