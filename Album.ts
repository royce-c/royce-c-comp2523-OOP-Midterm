import { Artist } from "./Artist";

export class Album {
    private _title: string;
    private _artist: Artist;
    private _yearReleased: number;
    private _tracks: string[];
    
    constructor(title: string, artist: Artist, yearReleased: number, tracks: string[]) {
        this._title = title
        this._artist = artist
        this._yearReleased = yearReleased
        this._tracks = tracks
    }
    
    public get title(): string {
        return this._title;
    }
    public set title(value: string) {
        this._title = value;
    }
    
    public get tracks(): string[] {
        return this._tracks;
    }

    public addTrack(track): void {
        this._tracks.push(track)
    }

}