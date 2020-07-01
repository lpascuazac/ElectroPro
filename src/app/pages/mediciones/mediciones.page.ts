import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs';

import { AlbumService } from 'src/app/services/album.service';

import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-mediciones',
  templateUrl: './mediciones.page.html',
  styleUrls: ['./mediciones.page.scss'],
})

export class MedicionesPage implements OnInit {

  results: Observable<any[]>;
  public color: string;
  data: any[];

  constructor(private albumService: AlbumService, private router: Router, private toastoController: ToastController) {
    this.results = this.albumService.getMeasures();
    
  }

  ngOnInit() {
  }

  openMedicionInTab(id, color){
  	this.router.navigateByUrl('/tabs/mediciones/medicion/' + id);
    if (color == "danger"){
      //console.log("-> exceso");
      let toast = this.toastoController.create({
      message: 'Se ha superado el límite de control de consumo',
      duration: 3500
      });
      toast.then(toast => toast.present());
    } else if (color == "warning"){
      let toast = this.toastoController.create({
      message: 'Nada conectado al sensor. No se detectó consumo.',
      duration: 3500
      });
      toast.then(toast => toast.present());
    }
  }

  putColor(m){
    var color;
    var conv_fact = 3600000;
    if((m < (0.335*conv_fact))&&(m != 0)) {
      color = "tertiary";
    } else if (m==0) {
      color = "warning";
    } else {
      color = "danger";
    }
    return color;
  }

  toKwh(measure_J){
    var measure_kWh = (Math.round(measure_J/3600000 * 100) / 100).toFixed(2);
    return measure_kWh;
  }

  getDate(str){
    var split1 = str.split("T", 2); 
    var date = split1[0];
    return date;    
  }

  getHour(str){
    var split1 = str.split("T", 2);
    var split2 = split1[1].split(":", 2);
    var hour = split2[0] + ":" + split2[1];
    return hour;
  }

}
