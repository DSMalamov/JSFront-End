function SumOfFirstAndLast(...arr) {
    let first = arr[0];
    let last = arr[arr.length-1];
    let result = first+last;
    console.log(result);
}

SumOfFirstAndLast(20, 30, 40);
SumOfFirstAndLast(10, 17, 22, 33);