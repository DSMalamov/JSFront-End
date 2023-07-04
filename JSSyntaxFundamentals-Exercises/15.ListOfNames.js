function printsortedNames(arr) {
    const sortedArr = arr.sort();
    
    for (let index = 1; index <= sortedArr.length; index++) {

        console.log(`${index}.${sortedArr[index - 1]}`);
    }
}

printsortedNames(["John", "Bob", "Christina", "Ema"]);
