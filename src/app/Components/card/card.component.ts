import { Component, OnInit, Input } from '@angular/core';
import { song } from 'src/app/Interfaces/song.interface';
import { LyricsService } from 'src/app/Services/lyrics.service';
import { lyrics } from 'src/app/Interfaces/lyrics.interface';
import { ShareSongDataService } from 'src/app/Services/share-song-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() song: song;
  lyricsService: LyricsService
  lyrics: string;
  data: any;
  
  constructor(
    lyricsService: LyricsService, 
    private router: Router,
    private songDataService: ShareSongDataService) { 
    this.lyricsService = lyricsService;
  }

  ngOnInit() {
    this.songDataService.currentMessage.subscribe(data => this.data = data)
  }
  getLyrics() {
    this.lyricsService.getLyrics(this.song.artist, this.song.title).subscribe(result => {
      this.lyrics = result.lyrics;
    }, error => {
      alert(`Sorry, the lyrics for ${this.song.title} can't be found.`);
      console.error(error)
    }, () => {
      this.updateSongInfo();
      this.router.navigateByUrl('/lyrics');
    });
  }

  private updateSongInfo() {
    this.songDataService.changeMessage({
      lyrics: this.lyrics,
      artist: this.song.artist,
      album: this.song.album,
      title: this.song.title
    });
  }
}
