function pangram(string) {
    let dictionary = {
        a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26
    }

    let stringArray = string.toLowerCase().trim().split("")

    const result = stringArray.reduce((acc, current) => {
        acc[dictionary[current] - 1] = 1
        return acc
    }, new Array(26).fill(0))

    const found = result.find(item => item === 0) === undefined
    if (found) {
        return "pangram"
    }
    else {
        return "not pangram"
    }

}

console.log(pangram("we promptly judged antique ivory buckles for the next prize"))
// console.log(pangram("We promptly judged ique ivory buckles for the prize"))


