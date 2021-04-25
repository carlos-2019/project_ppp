import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MODULOS PROPIOS
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  exports:[
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class AuthModule { }