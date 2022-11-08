function twoArrays(k, A, B) {
    // Write your code here

    let newA = A.sort((a, b) => a - b)
    let newB = B.sort((a, b) => b - a)


    let result = newA.reduce((accumulator, current, index) => {
        if (!accumulator) {
            return false
        }
        return newB[index] + current >= k
    }, true)

    return result ? "YES" : "NO"
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]))
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]))