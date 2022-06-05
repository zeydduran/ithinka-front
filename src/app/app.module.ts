import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { COMPONENTS, MODULES, PROVIDERS } from "./app.imports";
import { LayoutComponent } from './_components/layout/layout.component';
import { UserComponent } from './_components/user/user.component';
import { DetailComponent } from './_components/user/detail/detail.component';
import { CreateComponent } from './_components/user/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    COMPONENTS,
    LayoutComponent,
    UserComponent,
    DetailComponent,
    CreateComponent,
  ],
  imports: [
    MODULES
  ],
  providers: [
    PROVIDERS
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
