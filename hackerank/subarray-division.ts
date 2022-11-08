function birthday(s, d, m) {
    // Write your code here


    let result = 0
    let currentIndex = 0
    let localSum = 0

    while (!(currentIndex > s.length - 1)) {
        let subArray = s.slice(currentIndex, currentIndex + m)
        let sum = subArray.reduce((acc, curr) => acc + curr, 0)
        if (sum === d) {
            result++
            currentIndex += 1
        }
        else {
            currentIndex += 1
        }
    }

    return result

}

// console.log(birthday([1, 2, 1, 3, 2], 3, 2))
console.log(birthday([4], 4, 1))
console.log("done")