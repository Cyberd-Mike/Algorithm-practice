const factorial = (n) => {
    if (n === 0){
        return 1;
    }

    return n * factorial(n - 1);
}
// console.time('factorial_ten');
factorial(10);
// console.timeEnd('factorial_ten');

const countUp = (n) => {

    if (n === 10)
    {
        console.log(n);
        return n;
    }
    console.log(n);
    return countUp(n + 1);
}

countUp(1);