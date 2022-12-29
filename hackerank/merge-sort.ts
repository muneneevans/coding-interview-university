
const merge = (leftArray = [], rightArray = []) => {

    // merge
    // Receive 2 arrays,
    // compare the start of each array
    // whichever is smaller, add to new array and pop from current array
    // if both arrays are empty, return new arrays
    let leftCount = 0
    let rightCount = 0
    let mergedArray = []

    while (leftCount < leftArray.length || rightCount < rightArray.length) {
        if (leftArray[leftCount] <= rightArray[rightCount]) {
            mergedArray.push(leftArray[leftCount])
            leftCount++
        }
        else {
            mergedArray.push(rightArray[rightCount])
            rightCount++
        }
    }
    return mergedArray
}
function split(arr) {
    // divide the array down the middle
    // IF individual item return item
    if (arr.length === 1) {
        return arr
    }
    else {
        const middle = Math.floor(arr.length / 2)
        return merge(split(arr.slice(0, middle)), split(arr.slice(middle + 1, arr.length - 1)))
    }

}


console.log(split([39, 28, 44, 4, 10, 83, 11]))