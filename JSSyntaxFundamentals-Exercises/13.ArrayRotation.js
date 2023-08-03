function rotatingArray(arr, num) {
    for (let index = 0; index < num; index++) {
        arr.push(arr.shift());
    }

    console.log(arr.join(" "));
}

rotatingArray([51, 47, 32, 61, 21], 2);