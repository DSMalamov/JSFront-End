function calcArea(radius) {
    
    let inputType = typeof(radius);
    let result =0;

    if (inputType === 'number') {
        result = Math.pow(radius,2) * Math.PI;
        console.log(result.toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle area, because we receive a ${inputType}.`);
    }
    
}

calcArea(5);
calcArea('pet');