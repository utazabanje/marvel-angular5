import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarvelService } from '../service/marvel.service';
import { Character, Image } from '../character-class';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marvel-characters',
  templateUrl: './marvel-characters.component.html',
  styleUrls: ['./marvel-characters.component.css'],
  providers: [MarvelService]
})
export class MarvelCharactersComponent implements OnInit {

  characterData: Character[];
  characterSinglePageData: Character[];
  title: 'List of Marvel characters';
  pageSize = 20;
  pageIndex = 0;

  constructor(
    private marvelService: MarvelService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    console.log(router.url);
    if (router.url.indexOf('comic_characters') >= 0) {
      const id = +this.route.snapshot.paramMap.get('id');

      this.marvelService.showComicCharacters(id).subscribe(data => {
        this.characterData = data;
        this.paginatorChange(null);
      });
    } else {
      this.marvelService.showCharacters().subscribe(data => {
        this.characterData = data;
        this.paginatorChange(null);
      });
    }
  }

  ngOnInit() {
  }

  charDetail(id: number) {
    this.router.navigateByUrl('/characterdetail/' + id);
  }

  // charDetail(char: Character) {
  //   this.router.navigateByUrl('/characterdetail/' + char.id);
  // } ovako kada bi se napisala funkcija, moralo bi onda u charDetail(html) da se prosledi kao parametar samo char

  paginatorChange(event) {
    if (event !== null) {
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
    }
      this.characterSinglePageData = this.characterData.slice(
      this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);

    // if (this.characterData.length > this.pageSize) {
    //   this.characterSinglePageData = this.characterData.slice(
    //     this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
    // } else {
    //   this.characterSinglePageData = this.characterData;
    // }
    // ovo moze da se napise da bi se sprecilo da slucajno ne pukne aplikacija.
  }

}


// this.http.get('v1/public/characters?name=Hulk').subscribe(data => {
//   console.log(data);
// });

// {params: new HttpParams().set('name', 'Hulk')}
