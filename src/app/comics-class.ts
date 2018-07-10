export class ComicDataWrapper {
    data: ComicsDataContainer;
}

export class ComicsDataContainer {
    results: Comic[];
}

export class Comic {
    id: number;
    title: string;
    description: string;
    thumbnail: Images;
}

export class Images {
    path: string;
    extension: string;
}
