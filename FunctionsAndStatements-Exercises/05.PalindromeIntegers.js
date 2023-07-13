function isPalindrome(arr) {
  for (let index = 0; index < arr.length; index++) {
    const elArr = arr[index].toString().split("");
    let check = true;

    while (elArr.length > 1) {
      let el1 = elArr.shift();
      let el2 = elArr.pop();

      if (el1 !== el2) {
        check = false;
      }
    }

    console.log(check);
  }
}

isPalindrome([32, 2, 232, 1010]);
