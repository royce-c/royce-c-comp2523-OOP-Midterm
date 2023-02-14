export class Artist {
  private _name: string;
  private _albums: string[];

  constructor(name: string, albums: string[]) {
    this._name = name;
    this._albums = albums;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get albums(): string[] {
    return this._albums;
  }
  public set albums(value: string[]) {
    this._albums = value;
  }
}
