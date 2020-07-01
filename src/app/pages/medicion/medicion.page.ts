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
  cost = 550;  //Precio kWh
  key = [];
  value = [];
  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }

  ngOnInit() {
    // Get the ID that was passed with the URL
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    // Get the information from the API
    this.albumService.getDetail(id).subscribe(result => {
      this.information = result;

      //console.clear();
      //var str = "Apples are round, and apples are juicy."; 
      var split1 = this.information.date.split("T", 2); 
      this.information.date = split1[0];

      var split2 = split1[1].split(":", 2);
      this.information.hour = split2[0] + ":" + split2[1];

      console.log("Date: " + this.information.date);
      console.log("Hour: " + this.information.hour);

    
      this.information.m_joule = this.information.measure;
      this.information.m_kwh =  (Math.round(this.information.measure / 3600000 * 10000) / 10000).toFixed(4);
      this.information.cost = this.information.m_kwh * this.cost;
      console.log("Costo: " + this.information.cost);

      console.log("Joule: " + this.information.m_joule);
      console.log("kWh: " + this.information.m_kwh);
      
      
  	  });

  }
}
