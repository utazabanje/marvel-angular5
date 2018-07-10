import { Injectable } from '@angular/core';
import { Character, Image, CharacterDataWrapper } from '../character-class';
import { Comic, Images, ComicDataWrapper } from '../comics-class';
import { Creator, CreatorDataWrapper } from '../creators-class';
import { HttpClient, HttpParams } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MarvelService {

  characterData: Character[];
  comicData: Comic[];
  creatorData: Creator[];

  constructor(
    private http: HttpClient
  ) { }

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  showCharacters() {
    return this.http.get<CharacterDataWrapper>('v1/public/characters',
    {
      params: new HttpParams().set('limit', this.getRandomInt(50, 100))
    })
    .map(data => {
      this.characterData = data.data.results;
      return this.characterData;
    });
  }

  showComics() {
    return this.http.get<ComicDataWrapper>('v1/public/comics',
    {
      params: new HttpParams().set('limit', this.getRandomInt(50, 100))
    })
      .map(data => {
        this.comicData = data.data.results;
        return this.comicData;
      });
  }


  showCreators() {
    return this.http.get<CreatorDataWrapper>('v1/public/creators',
    {
      params: new HttpParams().set('limit', this.getRandomInt(50, 100))
    })
    .map(data => {
      this.creatorData = data.data.results;
      return this.creatorData;
    });
  }

  showComicCharacters(id: number) {
    return this.http.get<CharacterDataWrapper>(`v1/public/comics/${id}/characters`,
    {
      params: new HttpParams().set('limit', this.getRandomInt(50, 100))
    })
    .map(data => {
      this.characterData = data.data.results;
      return this.characterData;
    });
  }

  showComicCreators(id: number) {
    return this.http.get<ComicDataWrapper>(`v1/public/creators/${id}/comics`,
  {
    params: new HttpParams().set('limit', this.getRandomInt(50, 100))
  })
  .map(data => {
    this.comicData = data.data.results;
    return this.comicData;
  });
  }
}
