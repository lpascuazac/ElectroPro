import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AlbumService } from 'src/app/services/album.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})

export class MedicionesPage implements OnInit {

  results: Observable<any[]>;
  public color: string;

  constructor(private albumService: AlbumService, private router: Router) {
    this.results = this.albumService.getMeasures();
    
    /*console.clear();
    console.log("Reults_measure: " + this.results.measure);

    if(this.results.measure >= 35) {
      this.color = "danger";
    } else {
      this.color = "tertiary";
    }
    
    console.log("Color: " + this.color);*/  


  }

  ngOnInit() {
  }

  openMedicionInTab(id){
  	this.router.navigateByUrl('/tabs/mediciones/medicion/' + id);
  }

  putColor(m){
    var color;
    if(m >= 30) {
      color = "danger";
    } else {
      color = "tertiary";
    }
    return color;
  }


}
