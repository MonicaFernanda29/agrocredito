import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-register',
  imports: [CommonModule, FormsModule ,CardModule, InputTextModule, ButtonModule, DropdownModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  user = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
    userType: ''
  };

  userTypes = [
    { label: 'Agricultor', value: 'agricultor' },
    { label: 'Proveedor', value: 'proveedor' }
  ];

  onSubmit() {
    if (this.user.password !== this.user.confirmPassword) {
      alert('Las contraseñas no coinciden');
      return;
    }
    alert('Registro exitoso');
    console.log(this.user);
  }

}
