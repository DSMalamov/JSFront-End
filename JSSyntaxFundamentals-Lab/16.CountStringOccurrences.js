function strOcc(text, word) {
    let arr = text.split(' ');
    let counter = 0;

    for(let str of arr) {

        if (str === word) {
            counter++;
        }
    }

    console.log(counter);
}

strOcc('This is a word and it also is a sentence','is');
strOcc('softuni is great place for learning new programming languages','softuni');