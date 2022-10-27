function miniMaxSum(arr) {
    // Write your code here

    arr.sort((a, b) => a - b)
    // console.log(arr.reduce((acc, current) => { }, 0))
    let sum = 0
    let output = ``
    for (let index = 0; index < arr.length; index++) {
        if (index === arr.length - 1) {
            output = `${sum}`
            // print min
            sum -= arr[0]
            sum += arr[index]

            output = `${output} ${sum}`
            // console.log()

        } else {
            sum += arr[index]
        }
    }
    console.log(output)
}

miniMaxSum([1, 3, 5, 7, 9])