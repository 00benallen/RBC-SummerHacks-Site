import { Component, OnInit } from '@angular/core';
import { MembersService, Member } from '../state/state';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name: string
  username: string
  password: string
  degree: string
  skills: string

  constructor(private membersService: MembersService) { }

  ngOnInit() {

  }

  addMember() {

    let newMember = new Member()
    newMember.degree = this.degree
    newMember.name = this.name
    newMember.skills = []

    if(this.skills.endsWith(',')) {
      this.skills = this.skills.substr(0, this.skills.length-2)
    }

    let skillsArray = this.skills.split(',')
    for(var skill of skillsArray) {
      newMember.skills.push(skill.trim())
    }

    this.membersService.addMember(newMember)

    this.degree = ''
    this.name = ''
    this.password = ''
    this.username = ''
  }

}
