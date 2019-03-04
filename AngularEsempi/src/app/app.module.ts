import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {ItunesService} from './itunes.service';
import {JsonpModule, Jsonp, Response} from '@angular/http';
import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import {Routes, RouterModule} from '@angular/router';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';

const router: Routes = [
{ path: '', redirectTo: 'home', pathMatch: 'full' },
{ path: 'find', redirectTo: 'search', pathMatch: 'full' },
{path: 'search', component: SearchComponent},
{path: 'artist/:artistId', component: ArtistComponent,
children: [
  { path: '', redirectTo: 'tracks', pathMatch: 'full' },
  {path: 'tracks', component: ArtistTrackListComponent},
  {path: 'albums', component: ArtistAlbumListComponent},
]},

{path: 'home', component: HomeComponent},
{path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    ArtistComponent,
    ArtistTrackListComponent,
    ArtistAlbumListComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JsonpModule,
    RouterModule.forRoot(router)
  ],
  providers: [ItunesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
