import { readFileSync } from "fs";
import { Playlist } from "./Playlist";

export class localImporter {
  importPlaylist(): Playlist {
    const localInfo = readFileSync("./playlist.json");
    const playlist: Playlist = new Playlist(localInfo.name, localInfo.tracks);
    return playlist;
  }
}
