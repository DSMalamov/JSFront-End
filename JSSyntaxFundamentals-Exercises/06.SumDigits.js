function sumOfDigits(num) {
    const numAsString = num.toString();
    let sum = 0;

    for (let index = 0; index < numAsString.length; index++) {
        sum += Number(numAsString[index]);
        
    }

    console.log(sum);
}

sumOfDigits(245678);