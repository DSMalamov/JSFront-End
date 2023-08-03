function townInfo(arr) {
  arr
    .map((city) => {
      const splited = city.split(" | ");
      let ctown = splited[0];
      let clat = Number(splited[1]).toFixed(2);
      let clong = Number(splited[2]).toFixed(2);
      return {
        town: ctown,
        latitude: clat,
        longitude: clong,
      };
    })
    .forEach((city) => {
      console.log(
        `{ town: '${city.town}', latitude: '${city.latitude}', longitude: '${city.longitude}' }`
      );
    });
}

townInfo(["Sofia | 42.696552 | 23.32601", "Beijing | 39.913818 | 116.363625"]);
