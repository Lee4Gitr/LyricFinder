import { Component, OnInit } from '@angular/core';
import { song } from 'src/app/Interfaces/song.interface';
import { songs } from 'src/app/songs';

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {

  public SongList: song[];
  constructor() { 
    this.SongList = songs.SONGS_LIST;
  }

  ngOnInit() {
  }

}
