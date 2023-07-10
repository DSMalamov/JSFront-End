function operations(input) {
  const [target, ...chunks] = input;

  for (let index = 0; index < chunks.length; index++) {
    let chunk = chunks[index];
    console.log(`Processing chunk ${chunk} microns`);

    //cut
    if (chunk / 4 >= target) {
      let counter = 0;

      while (chunk / 4 >= target) {
        counter++;
        chunk = chunk / 4;
      }

      console.log(`Cut x${counter}`);
      console.log(`Transporting and washing`);
      chunk = Math.floor(chunk);
    }

    //Lap
    if (chunk * 0.8 >= target) {
      let counter = 0;

      while (chunk * 0.8 >= target) {
        counter++;
        chunk = chunk * 0.8;
      }

      console.log(`Lap x${counter}`);
      console.log(`Transporting and washing`);
      chunk = Math.floor(chunk);
    }

    //Grind
    if (chunk - 20 >= target) {
      let counter = 0;

      while (chunk - 20 >= target) {
        counter++;
        chunk = chunk - 20;
      }

      console.log(`Grind x${counter}`);
      console.log(`Transporting and washing`);
      chunk = Math.floor(chunk);
    }

    //Etch
    if (chunk - 2 >= target - 1) {
      let counter = 0;

      while (chunk - 2 >= target - 1) {
        counter++;
        chunk = chunk - 2;
      }

      console.log(`Etch x${counter}`);
      console.log(`Transporting and washing`);
      chunk = Math.floor(chunk);
    }

    if (chunk + 1 === target) {
      console.log(`X-ray x1`);
      chunk = chunk + 1;
      console.log(`Finished crystal ${chunk} microns`);
    } else {
      console.log(`Finished crystal ${chunk} microns`);
    }
  }
}

operations([1000, 4000, 8100]);
