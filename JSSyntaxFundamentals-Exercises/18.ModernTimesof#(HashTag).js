function wordsToPrint(arr) {
    arr = arr.split(" ");
    const copy = [];

    function containsNumbers(str) {
        return /\d/.test(str);
    }

    for (let index = 0; index < arr.length; index++) {

        if (arr[index][0] === "#" && arr[index].length > 1 && containsNumbers(arr[index]) === false) {
            console.log(arr[index].substring(1, arr[index].length));
        }
    }

}

wordsToPrint('The symbol # is known #variously in English-speaking #regions as the #number sign');