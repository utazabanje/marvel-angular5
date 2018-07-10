export class CharacterDataWrapper {
    data: CharacterDataContainer;
}

export class CharacterDataContainer {
    results: Character[];
}


export class Character {
    id: number;
    name: string;
    description: string;
    thumbnail: Image;
}

export class Image {
    path: string;
    extension: string;
}
