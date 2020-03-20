export class Mp3Asset {
    Id: number;
    PhysicalAsset: string;
    ArtistName: string;
    TrackTitle: string;
    AlbumTitle: string;
    TrackNumber: string;
    Year: string;
    Genre: string;
    Comment: string;
}

export class Mp3AssetDisplay extends Mp3Asset {
    IsSelected = false;
}
