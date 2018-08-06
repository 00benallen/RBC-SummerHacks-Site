import { Component, OnInit, Input } from '@angular/core';
import { User } from '../state/users';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  @Input()
  users: User[]

  constructor() { }

  ngOnInit() { 
    console.log(this.users)
  }

}
