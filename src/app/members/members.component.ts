import { Component, OnInit, Input, ChangeDetectorRef } from '@angular/core';
import { Member, MembersService } from '../state/state';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  members: Member[]

  constructor(private memService: MembersService, private change: ChangeDetectorRef) { }

  ngOnInit() {
    this.members = this.memService.members
  }

}
