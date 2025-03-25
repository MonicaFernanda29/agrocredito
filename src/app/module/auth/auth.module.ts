import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthInterceptorService} from "../../core/interceptors/auth-interceptor.service";



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass:AuthInterceptorService, multi: true}]
})
export class AuthModule { }
