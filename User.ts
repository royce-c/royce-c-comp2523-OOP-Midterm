import { Album } from "./Album";
import { Playlist } from "./Playlist";

export class User {
    private username: string;
    private password: string;
    playlist: Playlist[];
    album: Album[];

    addPlaylist(playlist): void {
        this.playlist.push(playlist)
    }

    addAlbum(album): void {
        this.album.push(album)
    }

    

}