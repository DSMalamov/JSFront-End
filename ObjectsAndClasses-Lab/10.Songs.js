function printSongs(arr) {
  class Song {
    constructor(type, name, length) {
      this.type = type;
      this.name = name;
      this.length = length;
    }
  }

  const typeToDispl = arr.pop();
  const [_, ...songs] = arr;

  const result = songs
    .map((songAsText) => {
      const [type, name, length] = songAsText.split("_");
      const song = new Song(type, name, length);
      return song;
    })
    .filter((song) => {
      if (typeToDispl === "all") {
        return song;
      }

      return song.type === typeToDispl;
    })
    .map((song) => song.name)
    .join("\n");

  console.log(result);
}

printSongs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
