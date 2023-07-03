function cookingResult(num, ...cmd) {

    let sum = num;
    for (let index = 0; index < cmd.length; index++) {
        
        switch (cmd[index]) {
            case 'chop':
                sum /= 2;
                break;
            case 'dice':
                sum = Math.sqrt(sum);
                break;
            case 'spice':
                sum += 1;
                break;
            case 'bake':
                sum *= 3;
                break;
            case 'fillet':
                sum *= 0.8;
                break;

        }

        console.log(sum);
    }

}

cookingResult('32', 'chop', 'chop', 'chop', 'chop', 'chop');