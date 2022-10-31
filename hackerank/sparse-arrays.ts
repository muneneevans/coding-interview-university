function matchingStrings(strings: string[], queries: string[]) {
    // Write your code here

    // Loop through query array
    // run se
    let result: number[] = []
    queries.forEach((query, index) => {
        let found = strings.filter((item) => item === query)
        result[index] = found.length
    })
    return result
}


// console.log(matchingStrings())


