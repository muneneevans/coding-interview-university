function timeConversion(s = '07:05:45PM') {
    // Write your code here
    // Get last 2 characters
    // check if am or pm
    // add 12 to hours if PM
    const flag = s.slice(s.length - 2)
    let hour = parseInt(s.substring(0, 2))
    let newString = s.substring(0, s.length - 2)

    if (flag === 'PM') {
        // return()

        if (hour === 12) {
            return `${`12`}${newString.substring(2)}`
        }
        else {

            return `${hour + 12}${newString.substring(2)}`
        }
    }
    else {
        if (hour === 12) { return `${`00`}${newString.substring(2)}` }
        else {

            return s.substring(0, s.length - 2)
        }
    }


}

console.log(timeConversion('12:45:54PM'))
