"use strict";
function binarySearch(orderedArr, value) {
    let low = 0;
    let high = orderedArr.length;
    let mid = Math.floor((low + high) / 2);
    while (low < high) {
        if (value === orderedArr[mid]) {
            return mid;
        }
        else if (orderedArr[mid] < orderedArr[high]) {
            high = mid + 1;
        }
        else {
            low = mid;
        }
    }
    return -1;
}
binarySearch([0, 1, 2, 3, 4, 5, 6, 7, 8], 6);
