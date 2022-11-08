const search = (key, arr, min, max) => {
    // Find the midpoint
    let midpoint = min + Math.ceil((max - min) / 2)
    let currentValue = arr[midpoint]
    if (max < min) {
        return -1
    }
    if (currentValue < key) {
        return search(key, arr, midpoint + 1, max)
    }
    else if (currentValue > key) {
        return search(key, arr, min, midpoint - 1)
    }
    else {
        return midpoint
    }



}


const array = [1, 2, 2, 4, 5, 6, 7, 8, 9, 19]
console.log(search(3, array, 0, array.length - 1))

