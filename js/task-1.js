'use strict';
function slugify(title) {
    const titleSl = title.split(" ");
    const titleSlug = titleSl.join("-").toLowerCase();
    return titleSlug;
}
console.log(slugify("Arrays for begginers")); 
console.log(slugify("English for developer")); 
console.log(slugify("Ten secrets of JavaScript")); 
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));