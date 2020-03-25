import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lyrics } from '../Interfaces/lyrics.interface';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  lyricsEndpoint = 'https://api.lyrics.ovh/v1'

  constructor(private http: HttpClient) { }

  getLyrics(artist:string, title:string) {
    return this.http.get<lyrics>(`${this.lyricsEndpoint}/${artist}/${title}`);
  }
}
