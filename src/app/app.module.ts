import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MarvelInterceptor } from './marvel.interceptor';
import { MarvelCharactersComponent } from './marvel-characters/marvel-characters.component';
import { AppRoutingModule } from './/app-routing.module';
import { MatCheckboxModule, MatCardModule, MatListModule, MatButtonModule, MatInputModule,
  MatPaginatorModule, MatToolbarModule, MatMenuModule, MatIconModule, MatProgressSpinnerModule, MatTooltipModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CharacterDetailComponent } from './character-detail/character-detail.component';
import { SearchComponent } from './search/search.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComicsComponent } from './comics/comics.component';
import { ComicsDetailComponent } from './comics-detail/comics-detail.component';
import { CreatorsComponent } from './creators/creators.component';


@NgModule({
  declarations: [
    AppComponent,
    MarvelCharactersComponent,
    CharacterDetailComponent,
    SearchComponent,
    ButtonsComponent,
    ComicsComponent,
    ComicsDetailComponent,
    CreatorsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatCardModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: MarvelInterceptor,
  multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
