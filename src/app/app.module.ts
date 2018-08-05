import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignUpModule } from './sign-up/sign-up.module';
import { HeaderModule } from './header/header.module';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { TeamsComponent } from './teams/teams.component';
import { TeamsModule } from './teams/teams.module';
import { HomeComponent } from './home/home.component';
import { MembersModule } from './members/members.module';
import { HomeModule } from './home/home.module';
import { NgbCarouselConfig } from '../../node_modules/@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path: 'apply', component: SignUpComponent},
  {path: 'teams', component: TeamsComponent},
  {path: '', component: HomeComponent},
  {path: '*', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SignUpModule,
    HeaderModule,
    TeamsModule,
    HomeModule,
    RouterModule.forRoot(
      routes,
      //{ enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
