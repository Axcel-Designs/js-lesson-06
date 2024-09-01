// Task 5: Merge objects

function myObjects(myprop1, myprop2){
    let merge = Object.assign({}, myprop1,myprop2);
    return merge;
}
let results = myObjects(
    {
        name:'favour',
        gender:`female`,
        age:25
    },
    {
        name:'vickor',
        gender:`male`,
        age:27 
    }

);
console.log(results);