function toUppercase(text) {
  const breakpoint = /[a-zA-Z0-9]+/g;
  const splited = text.match(breakpoint);
  for (let index = 0; index < splited.length; index++) {
    splited[index] = splited[index].toUpperCase();
  }

  console.log(splited.join(", "));
}

toUppercase("Hi, how are you?");
