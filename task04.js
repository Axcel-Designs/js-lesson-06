// Task 4: Remove properties from an object

function myObjects () {
    let keyword = {
        name:'ola',
        age: 26,
        level: 1
     }
     delete keyword.age;
     return keyword;
}

console.log(myObjects()); 