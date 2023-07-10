function replaecWord(...arr) {
    
    const words = arr[0].split(", ");
    let text = arr[1];
    
    for (let index = 0; index < words.length; index++) {
        const word = "*".repeat(words[index].length);
        text = text.replace(word, words[index]);
    }

    console.log(text);
}

replaecWord('great, learning','softuni is ***** place for ******** new programming languages');

