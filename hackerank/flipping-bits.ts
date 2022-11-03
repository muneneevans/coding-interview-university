function flippingBits(n) {
    // Write your code here
    let stringNum = n.toString(2)
    let newString = new Array(32 - stringNum.length).fill('0')
    newString = [...newString, ...stringNum.split('')]

    return newString.reverse().reduce((accumulator, current, index) => {
        let base10 = 0;
        if (current === "0") {
            base10 = 1 * 2 ** index
        } else {
            base10 = 0 * 2 ** index
        }
        return accumulator + base10
    }, 0)

}

console.log(flippingBits(9))
console.log(flippingBits(2147483647))
console.log(flippingBits(1))
console.log(flippingBits(0))
