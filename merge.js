function getUniqueAfterMerge(arr1, arr2) {

    // merge two arrays
    let arr = arr1.concat(arr2);
    let uniqueArr = [];

    // loop through array
    for (let i of arr) {
        if (uniqueArr.indexOf(i) === -1) {
            uniqueArr.push(i);
        }
    }
    console.log(uniqueArr);
}

const array1 = [1, 2, 3, 4];
const array2 = [2, 3, 4, 5];

console.log(`The first array is ${array1}`);
console.log(`The second array is ${array2}`);

// calling the function
// passing array argument
getUniqueAfterMerge(array1, array2);
