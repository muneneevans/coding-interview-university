function sockMerchant(n, ar) {
    // Write your code here

    let matches = 0
    let counter = 0

    let sorted = ar.sort((a, b) => a - b)
    while (counter < sorted.length) {
        if (sorted[counter] === sorted[counter + 1]) {
            matches += 1
            counter++
        }
        counter++
    }
    return matches
}

console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]))