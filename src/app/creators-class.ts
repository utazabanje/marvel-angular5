export class CreatorDataWrapper {
    data: CreatorDataContainer;
}

export class CreatorDataContainer {
    results: Creator[];
}

export class Creator {
    id: number;
    firstName: string;
    middleName: string;
    lastName: string;
    fullName: string;
    urls: Url[];
    thumbnail: Image;
}

export class Url {
    url: string;
}

export class Image {
    path: string;
    extension: string;
}
