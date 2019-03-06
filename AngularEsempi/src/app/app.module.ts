import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { JsonpModule } from '@angular/http';
import { FormBuilder, FormsModule, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ArtistComponent } from './artist/artist.component';
import { ArtistTrackListComponent } from './artist-track-list/artist-track-list.component';
import { ArtistAlbumListComponent } from './artist-album-list/artist-album-list.component';
import { AlwaysAuthGuard } from './always-auth-guard';
import { OnlyLoggedInUserGuard } from './only-logged-in-user-guard';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { UserService } from './user.service';

const route: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {
    path: 'artist/:artistId', component: ArtistComponent,
    canActivate: [AlwaysAuthGuard, OnlyLoggedInUserGuard],
    children: [
      { path: 'tracks', component: ArtistTrackListComponent },
      { path: 'albums', component: ArtistAlbumListComponent },
      { path: '**', redirectTo: 'tracks', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    HeaderComponent,
    ArtistComponent,
    ArtistAlbumListComponent,
    ArtistTrackListComponent,
    LoginComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    JsonpModule,
    RouterModule.forRoot(route)
  ],
  providers: [AlwaysAuthGuard, OnlyLoggedInUserGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
