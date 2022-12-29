// const fs = require('fs');

function countingSort(size, arr) {
    // Write your code here
    // initialize empty array
    // loop through arr adding to index
    let result = new Array(100).fill(0)

    arr.forEach(element => {
        result[element] += 1
    });

    return result

}





fs.readFile('/Users/evansmunene/Projects/Interview/coding-interview-university/hackerank/countsort-test.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }

    let arr = data.split(" ")

    console.log(countingSort(1000000, arr));

});


