function pageCount(n, p) {
    // Write your code here

    const mid = Math.floor(n / 2)
    let min = 0
    if (p <= mid) {
        // start from the left
        min = Math.floor(p / 2)
    }
    else {
        min = n % 2 === 0 ? Math.ceil((n - p) / 2) : Math.floor((n - p) / 2)
        // min = (n - p) / 2
    }

    return min


}

console.log(pageCount(6, 4))
console.log(pageCount(6, 5))
console.log(pageCount(5, 4))
console.log(pageCount(6, 5))