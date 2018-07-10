import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Character, Image, CharacterDataWrapper } from '../character-class';
import { Comic, ComicDataWrapper } from '../comics-class';
import { Router } from '@angular/router';
import { CreatorDataWrapper, Creator } from '../creators-class';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchCharacters: Character[];
  searchComics: Comic[];
  searchCreators: Creator[];
  searchValue = '';
  searchActive = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
  }

  search(term: string) {
    if (!term.trim()) {
      this.searchCharacters = [];
      this.searchComics = [];

      return;
    }

    this.searchCharacters = [];
    this.searchComics = [];

    this.searchActive = true;

    this.http.get<CharacterDataWrapper>(`v1/public/characters`,
      {
        params: new HttpParams().set('nameStartsWith', term.trim())
      }).subscribe(data => {
        this.searchCharacters = data.data.results;
        this.searchActive = false;

        this.http.get<ComicDataWrapper>('v1/public/comics',
          {
            params: new HttpParams().set('titleStartsWith', term.trim())
          }).subscribe(dataComics => {
            this.searchComics = dataComics.data.results;
            this.searchActive = false;
          });

          this.http.get<CreatorDataWrapper>('v1/public/creators',
        {
          params: new HttpParams().set('nameStartsWith', term.trim())
        }).subscribe(dataCreators => {
          this.searchCreators = dataCreators.data.results;
          this.searchActive = false;
        });
      });

    this.clearSearch();
  }

  clearSearch() {
    this.searchValue = '';
  }

  charDetail(id: number) {
    this.router.navigateByUrl('/characterdetail/' + id);
  }

  comicDetail(id: number) {
    this.router.navigateByUrl('/comics_detail/' + id);
  }
}
