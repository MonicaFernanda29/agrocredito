import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputGroupModule } from 'primeng/inputgroup';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { DatePickerModule } from 'primeng/datepicker';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { AuthService } from '../../../../core/services/auth.service';
import { RegisterRequest } from '../../../../core/model/ request/register-request.model';



@Component({
  selector: 'app-register',
  imports: [
    CardModule, 
    InputGroupAddonModule, 
    DatePickerModule, 
    InputGroupModule, 
    PasswordModule, 
    FormsModule, 
    CardModule, 
    InputTextModule, 
    FloatLabelModule, 
    ButtonModule, 
    CommonModule, 
    CascadeSelectModule,
    AnimateOnScrollModule ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(readonly authService:AuthService) { }


  /*selectedDate?: Date ;
  nombre : string = "";
  apellido: string = "";
  celular: string = "" ;
  ciudad: string = "" ;
  direccion: string = "";
  correo: string = "";
  password: string = "";*/
  registerData: RegisterRequest = {
    name: "" ,
    email: "",
    password: "" 
  }
  
  register(){
    this.authService.registerUser(this.registerData).subscribe({
      next: (response) => {
        console.log(this.registerData);
        alert(`Registrar usuario registrado con exito ${response.accessToken}`);
      },
      error: (error) => {
        alert(`Error al registrar el usuario ${error}`);
      }
    })
  }

}
