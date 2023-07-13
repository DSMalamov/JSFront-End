function substringCont(str, text) {
    const word = str.toLowerCase();
    text = text.split(" ");

    text = text.filter(function (str) {
        if (word.toLowerCase() === str.toLowerCase()) {
            return word;
        }
    })
    
    if (text.length > 0) {
        console.log(str)
    }
    else {
        console.log(`${str} not found!`)
    }
    
}

substringCont('javascript','JavaScript is the best programming language');