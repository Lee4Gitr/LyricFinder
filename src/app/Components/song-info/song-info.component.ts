import { Component, OnInit } from '@angular/core';
import { ShareSongDataService } from 'src/app/Services/share-song-data.service';
import { songInfo } from 'src/app/Interfaces/songInfo.interface';
import { lyrics } from 'src/app/Interfaces/lyrics.interface';

@Component({
  selector: 'app-song-info',
  templateUrl: './song-info.component.html',
  styleUrls: ['./song-info.component.css']
})
export class SongInfoComponent implements OnInit {
  lyricsService: any;

  constructor(private songDataService: ShareSongDataService) { }
  songInfo: songInfo;
  lyrics: lyrics;

  ngOnInit() {
    this.songDataService.currentMessage.subscribe(songInfo => {this.songInfo = songInfo})
  }
}
