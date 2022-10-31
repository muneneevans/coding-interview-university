function diagonalDifference(arr) {



    let primaryDiagonal = arr.reduce((accumulator, current, index) => {
        return accumulator + current[index]
    }, 0)
    let secondaryDiagonal = arr.reduce((accumulator, current, index) => {
        return accumulator + current.reverse()[index]
    }, 0)
    return Math.abs(primaryDiagonal - secondaryDiagonal)


}


console.log(diagonalDifference(
    [
        [11, 2, 4],
        [4, 5, 6],
        [10, 8, -12]
    ]
))