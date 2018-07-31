import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { HeaderModule } from './header/header.module';
import { RouterModule, Routes } from '../../node_modules/@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  {path: 'apply', component: SignUpComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    SignUpModule,
    HeaderModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
