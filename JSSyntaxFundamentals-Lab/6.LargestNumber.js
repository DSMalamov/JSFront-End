function printBiggestNum(...arr) {
    
    const sortedArr= arr.sort(function (a, b){
        return a - b;
    });

    const hightestNum = sortedArr[sortedArr.length-1];
<<<<<<< HEAD
    console.log(`The largest number is ${hightestNum}.`);
=======
    console.log(hightestNum);
>>>>>>> efe613199ac570d83c8f230c711366016fd68a29
}

printBiggestNum(-3, -5, -22.5)