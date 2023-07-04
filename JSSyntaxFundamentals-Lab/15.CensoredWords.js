function censoringText(text, word) {
<<<<<<< HEAD
  let censored = text;

  while (censored.includes(word)) {
    censored = censored.replace(word, "*".repeat(word.length));
  }

  console.log(censored);
}

censoringText("A small sentence with some words", "small");
censoringText("Find the hidden word", "hidden");
=======
    
    let censored = text;

    while (censored.includes(word)) {
        
        censored = censored.replace(word, '*'.repeat(word.length));
    }

    console.log(censored);
}

censoringText('A small sentence with some words', 'small');
censoringText('Find the hidden word', 'hidden' );
>>>>>>> efe613199ac570d83c8f230c711366016fd68a29
