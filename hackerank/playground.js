function plusMinus(arr) {
    // Write your code here
    let positives = 0
    let negatives = 0
    let zeros = 0
    arr.forEach((num) => {

        if (parseInt(num) === 0) {
            zeros++
        } else {
            parseInt(num) > 0 ? positives++ : negatives++
        }
    })

    console.log((positives / arr.length).toFixed(6));
    console.log((negatives / arr.length).toFixed(6));
    console.log((zeros / arr.length).toFixed(6));

}

plusMinus([1, 1, 0, -1, -1])

