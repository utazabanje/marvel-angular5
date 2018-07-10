import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Route } from '@angular/router';

import { MarvelCharactersComponent } from './marvel-characters/marvel-characters.component';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { SearchComponent } from './search/search.component';
import { ComicsComponent } from './comics/comics.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';
import { CreatorsComponent } from './creators/creators.component';


const routes = [
  {
    path: '', component: MarvelCharactersComponent
  },
  {
    path: 'comic_characters/:id', component: MarvelCharactersComponent
  },
  {
    path: 'characterdetail/:id', component: CharacterDetailComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'comics', component: ComicsComponent
  },
  {
    path: 'comics_detail/:id', component: ComicsDetailComponent
  },
  {
    path: 'creator_comics/:id', component: ComicsComponent
  },
  {
    path: 'creators', component: CreatorsComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
