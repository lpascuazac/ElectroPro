import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AlbumService } from 'src/app/services/album.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.page.html',
  styleUrls: ['./general.page.scss'],
})

export class GeneralPage implements OnInit {

  results: Observable<any [] >;
  public consum_tot: number;
  public consum_avg: number;
  public cost_tot: number;
  public cost_avg: number;
  public cost_unit: number;

  constructor(private albumService: AlbumService) {
    this.results = this.albumService.getMeasures();

    this.results.subscribe(elt => {

    	var results_lenght = elt.length;
    	console.log("Lenght: " + results_lenght);

    	var tot = 0;

    	for (var i = 0; i < results_lenght; i++) {
    		tot = tot + elt[i].measure;
    		//console.log(elt[i].id);
    	}
    	console.log("Consum_tot: " + tot);

      var conv_fact = 3600000;

      tot = tot/conv_fact;

    	this.consum_tot = Number((Math.round(Number(tot) * 10000) / 10000).toFixed(4));
    	this.consum_avg = Number((Math.round(Number(tot/results_lenght) * 10000) / 10000).toFixed(4));

    	console.log("Consum_avg: " + this.consum_avg);

    	this.cost_unit = 550; //Precio kWh

    	this.cost_avg = this.consum_avg * this.cost_unit;
    	this.cost_tot = this.consum_tot * this.cost_unit;

    	console.log("Consum_avg: " + this.cost_avg);
    	console.log("Consum_tot: " + this.cost_tot);
    	console.log("Cost_unit: " + this.cost_unit);

    });

  }

  ngOnInit() {
  }

}
