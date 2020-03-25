import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { MaterialModule } from './shared/material.module'
import { CardComponent } from './Components/card/card.component';
import { HeaderComponent } from './Components/header/header.component';
import { SongListComponent } from './Components/song-list/song-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SongInfoComponent } from './Components/song-info/song-info.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HeaderComponent,
    SongListComponent,
    SongInfoComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: SongListComponent},
      { path: 'lyrics', component: SongInfoComponent }, 
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
