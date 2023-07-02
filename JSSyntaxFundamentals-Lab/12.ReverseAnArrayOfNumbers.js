function takeAndReverse(n, arr) {
    let arrModify= arr.slice(0,n).reverse();
    let output = arrModify.join(" ");
    console.log(output);
}

takeAndReverse(3, [10, 20, 30, 40, 50] );
takeAndReverse(2, [66, 43, 75, 89, 47] );