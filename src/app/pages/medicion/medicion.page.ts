import { Component, OnInit } from '@angular/core';
import { AlbumService } from 'src/app/services/album.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-medicion',
  templateUrl: './medicion.page.html',
  styleUrls: ['./medicion.page.scss'],
})

export class MedicionPage implements OnInit {

  information = null;
  cost = 450;

  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    // Get the information from the API
    this.albumService.getDetail(id).subscribe(result => {
      this.information = result;
      console.log("id: " + this.information.id);
      console.log("Date: " + this.information.date);
      console.log("Measure: " + this.information.measure);
      console.log("Place: " + this.information.place);
      this.information.cost = this.information.measure * this.cost;
      console.log("Test: " + this.information.cost);


      
      
  	  });

  }
}
