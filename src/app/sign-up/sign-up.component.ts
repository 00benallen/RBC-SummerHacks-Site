import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User, UserService } from '../state/users';



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

  users: User[]

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.users = this.userService.users
  }

  addMember() {

    let newUser = new User(this.name, this.username, this.password, this.degree, [])

    if (this.skills.endsWith(',')) {
      this.skills = this.skills.substr(0, this.skills.length - 2)
    }

    let skillsArray = this.skills.split(',')
    for (var skill of skillsArray) {
      newUser.skills.push(skill.trim())
    }

    this.users = this.userService.addUser(newUser)

    this.degree = ''
    this.name = ''
    this.password = ''
    this.username = ''
  }

}
