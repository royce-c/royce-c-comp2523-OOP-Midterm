import { Playlist } from "./Playlist";
import { IImporter } from "./PlaylistImporter";

export class cloudImporter {

    constructor(cloudImporter: IImporter) {

    }

  importPlaylist(URL): Playlist {
    const cloudInfo = URL;
    const playlist: Playlist = new Playlist(cloudInfo.name, cloudInfo.tracks);
    return playlist;
  }
}
