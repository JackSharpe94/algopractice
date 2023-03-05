function bubblePractice(unsortedArr: number[]) {
    for(let i = 0; i < unsortedArr.length; i++) {
        for(let j = 0; j < unsortedArr.length - 1 - i; j++) {
            const tmp = unsortedArr[j]
            if(unsortedArr[j] > unsortedArr[j + 1]) {
                unsortedArr[j] = unsortedArr[j + 1];
                unsortedArr[j+1] = tmp;
            }
        }
    }

    return unsortedArr;
}

console.log(bubblePractice([1,5,2,3,9,6]))