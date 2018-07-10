import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { MarvelService } from '../service/marvel.service';
import { Comic, ComicDataWrapper } from '../comics-class';
import { Creator, CreatorDataWrapper } from '../creators-class';


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  providers: [MarvelService]
})
export class ComicsComponent implements OnInit {

  comicsData: Comic[];
  comicsSingleData: Comic[];
  pageSize = 20;
  pageIndex = 0;

  constructor(
    private marvelService: MarvelService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {
    if (router.url.indexOf('creator_comics') >= 0) {
      const id = +this.route.snapshot.paramMap.get('id');

      this.marvelService.showComicCreators(id).subscribe(data => {
        this.comicsData = data;
        this.paginatorChange(null);
      });

    } else {
      this.marvelService.showComics().subscribe(data => {
        this.comicsData = data;
        this.paginatorChange(null);
      });
    }
  }

  paginatorChange(event) {
    if (event !== null) {
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
    }

    this.comicsSingleData = this.comicsData.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }

  comicDetail(id: string) {
    this.router.navigateByUrl('/comics_detail/' + id);
  }

  ngOnInit() { }
}
