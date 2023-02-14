import { Playlist } from "./Playlist";

export interface IImporter {
    importPlaylist(): Playlist
}