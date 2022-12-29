function caesarCipher(s, k) {
    // Write your code here
    let stringArray = s.split("")
    let letterArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]


    const getNewK = (arraySize, shiftSize) => {
        return (shiftSize - (arraySize * Math.floor(shiftSize / arraySize)))
    }

    // loop through each element
    return stringArray.reduce((accumulator, current) => {

        let found = letterArray.findIndex(item => item === current.toLowerCase())
        if (found >= 0) {

            if (k > letterArray.length) {
                k = getNewK(letterArray.length, k)
            }

            let newIndex = found + k
            if (newIndex > letterArray.length - 1) {
                newIndex = newIndex - letterArray.length
            }

            if (current === current.toUpperCase()) {
                return accumulator.concat(letterArray[newIndex].toUpperCase())
            }

            return accumulator.concat(letterArray[newIndex])
        } else {
            return accumulator.concat(current)
        }
    }, "")
    // 
}

// console.log(caesarCipher("middle-Outz", 2))
console.log(caesarCipher("Always-Look-on-the-Bright-Side-of-Life", 5))
// "Fqbfdx-Qttp-ts-ymj-Gwnlmy-Xnij-tk-Qnkj"