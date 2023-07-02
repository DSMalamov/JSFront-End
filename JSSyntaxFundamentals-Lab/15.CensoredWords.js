function censoringText(text, word) {
    
    let censored = text;

    while (censored.includes(word)) {
        
        censored = censored.replace(word, '*'.repeat(word.length));
    }

    console.log(censored);
}

censoringText('A small sentence with some words', 'small');
censoringText('Find the hidden word', 'hidden' );