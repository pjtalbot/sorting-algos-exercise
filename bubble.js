function bubbleSort(arr) {

    for (let i = 0; i < arr.length; i++) {
        // possible optimization, add var swapped = false
        // if the loop is runthrough and nothing is swapped, end
        for (let j = 0; j < arr.length -1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1]
                arr[j+1] = temp

            }

        }
    }

    return arr
}

module.exports = bubbleSort;