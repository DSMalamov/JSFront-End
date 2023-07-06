function passwordValidator(pass) {
  let isValid = true;

  if (pass.length < 6 || pass.length > 10) {
    console.log("Password must be between 6 and 10 characters");
    isValid = false;
  }

  if (!pass.match("^[A-Za-z0-9]+$")) {
    console.log("Password must consist only of letters and digits");
    isValid = false;
  }

  const digitCounter = pass.match(/\d/g);

  if (!digitCounter || digitCounter < 2) {
    console.log("Password must have at least 2 digits");
    isValid = false;
  }

  if (isValid) {
    console.log("Password is valid");
  }
}

passwordValidator("logIn");
