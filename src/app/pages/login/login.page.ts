import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

	credentialsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastoController: ToastController) { }

  ngOnInit() {
  	this.credentialsForm = this.formBuilder.group({
  		email: ['', [Validators.required, Validators.email]],
  		password: ['', [Validators.required, Validators.minLength(6)]]
  	});
  }

  onSubmit() {
  	this.authService.login(this.credentialsForm.value).subscribe();

    //Toast
    let toast = this.toastoController.create({
      message: 'Inciando Sesión',
      duration: 3000
    });
    toast.then(toast => toast.present());

    //console.log("->" + this.credentialsForm.controls['email'].value);
  }

  register() {
  	this.authService.register(this.credentialsForm.value).subscribe(res => {
  		this.authService.login(this.credentialsForm.value).subscribe();
  	});

    //Toast
    let toast = this.toastoController.create({
      message: 'Creando usuario ' + this.credentialsForm.controls['email'].value + '. Iniciando Sesión',
      duration: 3000
    });
    toast.then(toast => toast.present());
  }

}
