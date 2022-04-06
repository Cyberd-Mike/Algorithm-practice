// Less optimized version 

//const greatestFactor = (x, y) => {

//     let bigger;
//     let smaller;
//     let smallFactors = [];
//     let gcf = 1;

//     console.log(x + " and " + y);
//     if (x == y) 
//     {
//         if (x == 0)
//         {
//             return "NONE. Two Zeroes."
//         }

//         return x;
//     }

//     if (x > y)
//     {
//         if (y == 0){return x};
//         bigger = x;
//         smaller = y;
//     } else {
//         if (x == 0){return y};
//         bigger = y;
//         smaller = x;
        
//     }

//     for (let i = 1; i <= Math.ceil(smaller / 2); i++)
//     {
//         if (smaller % i == 0)
//         {
//             smallFactors.push(i);
//         }
//     }
   

//     for (let i = smallFactors.length; i > 1; i--)
//     {
//         if (bigger % smallFactors[i] == 0)
//         {
//             gcf = smallFactors[i];
//         }
//     }

//     return gcf;
// }

const greatestFactor = (x, y) => {
    if (y == 0)
    {
        let t = x;
        x = y; 
        y = t;
    }

    while (y != 0) {
        x, y = y, x % y; 
    }
    return x;
}

console.log(greatestFactor(10, 25));
console.log(greatestFactor(5, 97));
console.log(greatestFactor(0, 10));
console.log(greatestFactor(12, 0));
console.log(greatestFactor(0, 0));