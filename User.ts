import { Album } from "./Album";
import { Playlist } from "./Playlist";
import { Song } from "./Song";

export class User {
  private username: string;
  private password: string;
  playlist: Playlist[];
  album: Album[];

  addPlaylist(playlist): void {
    this.playlist.push(playlist);
  }

  addAlbum(album): void {
    this.album.push(album);
  }

  getSongs(): Song[] {
    const songs = []
    this.album.forEach(song => {
        songs.push(song)
    });
    return songs
  }

  getAlbums(): Album[] {
    return this.album
  }

  getPlaylists(): Playlist[] {
    return this.playlist
  }

  addPlaylistToUser(playlist): void {
    this.playlist.push(playlist)
  }

}
