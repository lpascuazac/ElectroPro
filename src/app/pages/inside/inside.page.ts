import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.page.html',
  styleUrls: ['./inside.page.scss'],
})
export class InsidePage implements OnInit {

	data = "";
  info = "";
  authors = "";

  constructor(private authService: AuthService, private storage: Storage, private toastoController: ToastController, private router: Router) { }

  ngOnInit() {
  }

  loadSpecialInfo(){
  	this.authService.getSpecialData().subscribe(res => {
  		this.data = res['msg'] + "Bienvenido a ElectroPro - v0.1";
      this.info = "Aplicación diseñada para la materia de Sistemas Embebidos de la Universidad Nacional de Colombia"; 
      this.authors = "lpascuazac - jemunozva";
  	});
    //this.router.navigate(['tabs']);
  }

  logout() {
  	this.authService.logout();
  }

  clearToken() {
  	this.storage.remove('access_token');
  	let toast = this.toastoController.create({
  		message: 'JWT removed',
  		duration: 3000
  	});
  	toast.then(toast => toast.present());
  }

}
