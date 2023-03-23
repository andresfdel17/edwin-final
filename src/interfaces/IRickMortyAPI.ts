export interface IInfo {
    count: number;
    pages: number;
    next: string;
    prev: string | null;
}

export interface IOrigin {
    name: string;
    url: string;
}

export interface ILocation {
    name: string;
    url: string;
}


export interface ICharacter {
    id: number;
    name: string;
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: IOrigin;
    location: ILocation;
    image: string;
    episode: string[];
}

export interface EmptyResponse {
    error: string;
}

export interface ICharacterAPIResponse {
    info: IInfo;
    results: ICharacter[];
}