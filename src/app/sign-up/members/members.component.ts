import { Component, OnInit, Input } from '@angular/core';

export class Member {
  name: string
  degree: string
  skills: string[]
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  @Input()
  members: Member[]

  constructor() { }

  ngOnInit() {
  }

}
