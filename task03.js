// Task 3: Iterate over object properties

function object (prop){

    let result = ``;
    for(let x in prop){
        result += prop[x] + ` `;
    }
    return result;
}
    let prop = {
        name: 'Video',
        gender: 'male',
        age: 25
    };
const results = object(prop);
console.log(results);



//     const results = object({
//         name: 'Video',
//         gender: 'male',
//         age: 25
//     });
//     console.log(results);

