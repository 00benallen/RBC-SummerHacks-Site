import { Component, OnInit } from '@angular/core';
import { Member } from './members/members.component';

const members: Member[] = [
  {name: "Ben Pinhorn", degree: "Computer Science", skills: ["Java", "Angular", "C"]},
  {name: "Mark Zucc", degree: "Facebook school of being the boss", skills: ["Drinking Water", "Smiling", "PHP :("]},
  {name: "Rob James", degree: "Software Engineering", skills: ["Java", "Java", "Java"]},
  {name: "Crystal Waters", degree: "Graphic Design", skills: ["Drawing", "Mockups", "Slides"]},
  {name: "John Smith", degree: "undefined", skills: ["Arrays"]},
]

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
  members: Member[] = members.slice(0, 3)

  constructor() { }

  ngOnInit() {
  }

  addMember() {

    let newMember = new Member()
    newMember.degree = this.degree
    newMember.name = this.name
    newMember.skills = []
    let skillsArray = this.skills.split(',')
    for(var skill of skillsArray) {
      newMember.skills.push(skill.trim())
    }

    let concatArray = [newMember]

    this.members = concatArray.concat(this.members)
  }

}
