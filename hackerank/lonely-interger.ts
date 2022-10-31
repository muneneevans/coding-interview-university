function lonelyinteger(a) {
    // Write your code here
    let result = null
    a.forEach((num, index) => {
        let found = a.filter(item => item === num)
        if (found.length === 1) {
            // return num
            result = num
        }
    })
    return result
}

console.log(lonelyinteger([1, 1, 2, 3, 3, 4, 4]))
