function sameNumbers(num) {
    isSame = true;
    numsAsString = num.toString();
    sum = 0;

    for (let index = 0; index < numsAsString.length; index++) {
        
        if (numsAsString[0] !== numsAsString[index]) {
            isSame = false;
        }
        sum += Number(numsAsString[index]);
    }

    console.log(isSame);
    console.log(sum);
}

sameNumbers(2222122);