import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CreateComponent, DetailComponent, HomeComponent,LoginComponent, RegisterComponent } from './_components';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import { ErrorInterceptor,JwtInterceptor } from "./_helpers";
import { UserComponent } from './_components/user/user.component';

export const COMPONENTS : any[] = [
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    UserComponent,
    DetailComponent,
    CreateComponent
];

export const MODULES : any[] = [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
];

export const PROVIDERS : any[] = [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
];
