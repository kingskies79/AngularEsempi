import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import {Routes, RouterModule} from '@angular/router';
import {JsonpModule} from '@angular/http';
import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { AlwaysAuthGuard } from './always-auth-guard';
import {OnlyLoggedInUsersGuard} from './only-logged-in-users-guard';
import { UserService } from './user-service';
import {AlwaysAuthChildrenGuard} from './always-auth-children-guard';
import { SearchService } from './search.service';
import { ArtistVideoListComponent } from './artist-video-list/artist-video-list.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'find', redirectTo: 'search'},
  {path: 'search', component: SearchComponent},
  {path: 'artist/:artistId', component: ArtistComponent, canActivate: [OnlyLoggedInUsersGuard, AlwaysAuthGuard],
  canActivateChild: [AlwaysAuthChildrenGuard],
   children: [
    {path: 'tracks', component: ArtistTrackListComponent},
    {path: 'albums', component: ArtistAlbumListComponent},
    {path: 'video', component: ArtistVideoListComponent},
    {path: '', redirectTo: 'tracks', pathMatch: 'full'},
  ]},
  {path: '**', component: HomeComponent},
];


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HeaderComponent,
    HomeComponent,
    ArtistComponent,
    ArtistAlbumListComponent,
    ArtistTrackListComponent,
    ArtistVideoListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JsonpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [SearchService, AlwaysAuthGuard, OnlyLoggedInUsersGuard,  UserService, AlwaysAuthChildrenGuard ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
