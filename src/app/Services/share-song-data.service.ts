import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { songInfo } from '../Interfaces/songInfo.interface';

@Injectable({
  providedIn: 'root'
})
export class ShareSongDataService {

  private songData = new BehaviorSubject<songInfo>({
    lyrics: "no lyrics found" ,
    title: "No title",
    artist: "No artist",
    album: "No albumn"
  });
  currentMessage = this.songData.asObservable();

  constructor() { }

  changeMessage(songInfo: songInfo) {
    this.songData.next(songInfo);
  }
}
