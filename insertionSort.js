const numberArray = [7, 3, 8, 2, 5, 10, 6, 4, 9, 1];

const insertionSort = (array) => {
    for (let i = 1; i < array.length; i++)
    {
        value = array[i];
        while (i > 0 && array[i - 1] > value)
        {
            array[i] = array[i - 1];
            i --;
        }
        array[i] = value;
    }
    return array;
}

const result = insertionSort(numberArray);
console.log(result);