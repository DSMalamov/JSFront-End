function printBiggestNum(...arr) {
    
    const sortedArr= arr.sort(function (a, b){
        return a - b;
    });

    const hightestNum = sortedArr[sortedArr.length-1];
    console.log(hightestNum);
}

printBiggestNum(-3, -5, -22.5)