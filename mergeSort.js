const unsortedArr = [31, 27, 28, 42, 13, 8, 11, 30, 17, 41, 15, 43, 1, 36, 9, 16, 20, 35, 48, 37, 7, 26, 34, 21, 22, 6, 29, 32, 49, 10, 12, 19, 24, 38, 5, 14, 44, 40, 3, 50, 46, 25, 18, 33, 47, 4, 45, 39, 23, 2];
let iteration = 0;
//Leftarr and rightarr are sorted.
const merge = (leftArr, rightArr) => {
    let output = [], leftIndex = 0, rightIndex = 0;

    while (leftIndex < leftArr.length && rightIndex < rightArr.length)
    {
        if (leftArr[leftIndex] < rightArr[rightIndex])
        {
            // console.log("Left < Right", leftEl, rightEl);
            output.push(leftArr[leftIndex]);
            leftIndex++;
        }else{
            output.push(rightArr[rightIndex]);
            // console.log("Right < Left", rightEl, leftEl);
            rightIndex++;
        }
    }

    return output
        .concat(leftArr.slice(leftIndex))
        .concat(rightArr.slice(rightIndex));
}

const mergeSort = (unsortedArray) => {
    
    if(unsortedArray.length <= 1){
        return unsortedArray;
    }  
    const middleIndex = Math.floor(unsortedArray.length / 2);
    const leftArr = unsortedArray.slice(0, middleIndex);
    const rightArr = unsortedArray.slice(middleIndex);
    
    return merge(
        mergeSort(leftArr), mergeSort(rightArr)
    );
}

console.log(mergeSort(unsortedArr));
