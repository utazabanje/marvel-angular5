import { Component, OnInit } from '@angular/core';
import { Creator, CreatorDataWrapper} from '../creators-class';
import { MarvelService } from '../service/marvel.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.css'],
  providers: [ MarvelService ]
})
export class CreatorsComponent implements OnInit {

  creatorData: Creator[];
  creatorSingleData: Creator[];
  pageSize = 20;
  pageIndex = 0;

  constructor(
    private marvelService: MarvelService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
      this.marvelService.showCreators().subscribe(data => {
        this.creatorData = data;
        this.paginatorChange(null);
      });
  }

  paginatorChange(event) {
    if (event !== null) {
      this.pageSize = event.pageSize;
      this.pageIndex = event.pageIndex;
    }

    this.creatorSingleData = this.creatorData.slice(this.pageIndex * this.pageSize, (this.pageIndex + 1) * this.pageSize);
  }

  creatorComicDetail(id: string) {
    this.router.navigateByUrl('/creator_comics/' + id);
  }

  ngOnInit() {
  }

}
