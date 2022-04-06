const numberArray = [1, 5, 15, 9, 2];
// const stringArray = ["orange", "apple", "carrot", "pumpkin", "potato"];

const bubbleSort = (array) => {
    let list_length = array.length - 1;
    console.log('List Length is ', list_length);

    for (let i = 0; i < list_length; i++)
    {
        let noSwaps = true;
        console.log("Assessing value against: ", array[i]);

        for (let j = 0; j < list_length - i; j++)
        {
            if (array[j] > array[j + 1])
            {
                let oldValue = array[j]; 
                array[j] = array[j + 1];
                array[j + 1] = oldValue;
                noSwaps = false;
            }
        }
        if (noSwaps)
        {
            console.log('No swaps happened.');
            return array;
        }
    }
    return array;
}

console.log(bubbleSort(numberArray));