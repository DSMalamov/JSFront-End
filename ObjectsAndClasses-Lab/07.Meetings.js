function schedule(arr) {
  const schedule = arr.reduce((acc, curr) => {
    const [day, name] = curr.split(" ");

    if (acc.hasOwnProperty(day)) {
      console.log(`Conflict on ${day}!`);
    } else {
      acc[day] = name;
      console.log(`Scheduled for ${day}`);
    }
    return acc;
  }, {});

  Object.entries(schedule).forEach(function ([day, name]) {
    console.log(`${day} -> ${name}`);
  });
}

schedule([
  "Friday Bob",
  "Saturday Ted",
  "Monday Bill",
  "Monday John",
  "Wednesday George",
]);
