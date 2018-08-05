import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


import { SignUpComponent } from './sign-up.component';
import { MembersModule } from '../members/members.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MembersModule
  ],
  declarations: [SignUpComponent],
  exports: [SignUpComponent]
})
export class SignUpModule { }
