import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';


import { SignUpComponent } from './sign-up.component';
import { MembersComponent } from './members/members.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [SignUpComponent, MembersComponent],
  exports: [SignUpComponent]
})
export class SignUpModule { }
