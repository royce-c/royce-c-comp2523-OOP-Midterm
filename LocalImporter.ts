import { readFileSync } from "fs";
import { Playlist } from "./Playlist";
import { IImporter } from "./PlaylistImporter";

export class localImporter {

    constructor(localImporter: IImporter) {

    }

  importPlaylist(): Playlist {
    const localInfo = readFileSync("./playlist.json");
    const playlist: Playlist = new Playlist(localInfo.name, localInfo.tracks);
    return playlist;
  }
}
