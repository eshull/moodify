import { Component, OnInit } from '@angular/core';
import { SpotifyAPIService } from '../spotify-api.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [SpotifyAPIService]
})
export class FormComponent implements OnInit {

  constructor(private spotifyAPI: SpotifyAPIService) { 
    
  }
  genres: any[];

  ngOnInit() {
    this.genres= [];
    this.spotifyAPI.loadGenres().subscribe(response => {
      console.log(response);
      
      if(response.albums.items.length > 0) {
        this.genres = response.genres;
         
      }
    });
  }
  

}
