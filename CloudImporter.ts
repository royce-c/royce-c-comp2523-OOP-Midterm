import { Playlist } from "./Playlist";

export class cloudImporter {
  importPlaylist(URL): Playlist {
    const cloudInfo = URL;
    const playlist: Playlist = new Playlist(cloudInfo.name, cloudInfo.tracks);
    return playlist;
  }
}
