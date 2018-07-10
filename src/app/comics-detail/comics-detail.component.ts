import { Component, OnInit } from '@angular/core';
import { Comic, ComicDataWrapper } from '../comics-class';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-comics-detail',
  templateUrl: './comics-detail.component.html',
  styleUrls: ['./comics-detail.component.css']
})
export class ComicsDetailComponent implements OnInit {

  singleComic: Comic;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.getComic();
  }

  getComic() {
    const id = this.route.snapshot.paramMap.get('id');

    this.http.get<ComicDataWrapper>('v1/public/comics/' + id).subscribe(data => {
      this.singleComic = data.data.results[0];
      console.log(this.singleComic);
    });
  }

  comicCharDetail(id: string) {
    this.router.navigateByUrl('/comic_characters/' + id);
  }

}
