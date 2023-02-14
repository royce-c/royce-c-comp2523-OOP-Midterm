import { Song } from "./Song";
import { Album } from "./Album";

export class Playlist {
  private _name: string;
  private _songs: Song[];

  constructor(name: string, songs: Song[] = []) {
    this._name = name;
    this._songs = songs;
  }

  get name(): string {
    return this.name;
  }

  set name(value: string) {
    this._name = value;
  }

  get songs(): Song[] {
    return this.songs;
  }

  set songs(value: Song[]) {
    this._songs = value;
  }

  addAlbum(album: Album): void {
    for (const song in album.tracks) {
      this._songs.push(song);
    }
  }
}
