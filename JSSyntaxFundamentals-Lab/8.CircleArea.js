function calcArea(radius) {
    
    let inputType = typeof(radius);
    let result =0;

    if (inputType === 'number') {
        result = Math.pow(radius,2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else{
<<<<<<< HEAD
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
=======
        console.log('We can not calculate the circle area, because we receive a string.');
>>>>>>> efe613199ac570d83c8f230c711366016fd68a29
    }
    
}

calcArea(5);
calcArea('pet');