function sortingNum(arr) {
    
    const sortedArr = arr.sort((a, b) => a - b);
    const sAlength = arr.length;
    const resultArr = [];

    for (let index = 0; index < sAlength; index++) {
        
        if (index % 2 === 0) {
            resultArr.push(sortedArr.shift());
        }
        else {
            resultArr.push(sortedArr.pop());
        }  
    }

    return resultArr;
=======
    console.log(sortedArr);
>>>>>>> efe613199ac570d83c8f230c711366016fd68a29
}

sortingNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);

