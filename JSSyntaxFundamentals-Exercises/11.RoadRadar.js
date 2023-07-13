function speedLimitsPrint(speed, area) {
    
    const speedLimits = {
        motorway: 130,
        interstate: 90,
        city: 50,
        residential: 20,
    };

    const currSpeedLimit = speedLimits[area];

    const overSpeed = speed - currSpeedLimit;

    if (overSpeed <= 0) {
        console.log(`Driving ${speed} km/h in a ${currSpeedLimit} zone`);
        return;
    }

    const speedingMsg =
        overSpeed <= 20
        ? "speeding"
        : overSpeed <= 40
        ? "excessive speeding"
        : "reckless driving";
    
    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${currSpeedLimit} - ${speedingMsg}`);
}

speedLimitsPrint(120, 'interstate' );