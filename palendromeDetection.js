const isPalendrome = (str) => {
    
    let newString = str.toLowerCase().split("");
    var reverse = newString.reverse();
    var reverse = reverse.join("");
    
    if (reverse == str)
    {
        return true;
    }
    return false;
}

console.log(isPalendrome('racecar'));
console.log(isPalendrome('test'));