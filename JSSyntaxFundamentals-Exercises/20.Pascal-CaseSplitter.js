function splitText(text) {

    let textcopy = "";

    for (let index = 0; index < text.length; index++) {
        if (text[index] === text[index].toUpperCase()) {
            textcopy+= ` ${text[index]}`
        }
        else {
            textcopy += text[index];
        }

    }
    textcopy = textcopy.trim();
    const result = textcopy.split(" ");


    console.log(result.join(", "));
}

splitText('SplitMeIfYouCanHaHaYouCantOrYouCan');