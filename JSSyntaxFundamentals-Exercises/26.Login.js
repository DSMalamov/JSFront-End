function login(input) {
  const [user, ...passwords] = input;

  const username = user.split("").reverse().join("");

  for (let index = 0; index < passwords.length; index++) {
    if (passwords[index] === username) {
      console.log(`User ${user} logged in.`);
      break;
    }
    if (index == 3) {
      console.log(`User ${user} blocked!`);
      break;
    }

    console.log(`Incorrect password. Try again.`);
  }
}

login(["momo", "omom"]);
