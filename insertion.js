function insertionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let j
        let curr = arr[i]

        for (j = i -1; j > -1 && arr[j] > curr; j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = curr;

    } 
    return arr;
}

module.exports = insertionSort;