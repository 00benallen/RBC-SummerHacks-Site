import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { UserService } from '../state/users';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @ViewChild('homeButton')
  homeButton: ElementRef

  @ViewChild('teamsButton')
  teamsButton: ElementRef

  @ViewChild('loginButton')
  loginButton: ElementRef

  @ViewChild('applyButton')
  applyButton: ElementRef

  selectedTab: number

  showLoginButton: boolean

  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }

  ngAfterViewInit(): void {
    this.showLoginButton = !this.userService.loggedIn
    this.clearButtonSelect()
    this.onSelect(0)
  }

  clearButtonSelect() {
    this.homeButton.nativeElement.setAttribute('selected', 'false')
    this.teamsButton.nativeElement.setAttribute('selected', 'false')
    this.loginButton.nativeElement.setAttribute('selected', 'false')
    this.applyButton.nativeElement.setAttribute('selected', 'false')
  }

  onSelect(tab: number) {
    this.clearButtonSelect()
    if (tab === 0) {
      console.log('selecting home button')
      this.homeButton.nativeElement.setAttribute('selected', 'true')
    } else if (tab === 1) {
      console.log('selecting teams button')
      this.teamsButton.nativeElement.setAttribute('selected', 'true')
    } else if (tab === 2) {
      console.log('selecting login button')
      this.loginButton.nativeElement.setAttribute('selected', 'true')
    } else if (tab === 3) {
      console.log('selecting apply button')
      this.applyButton.nativeElement.setAttribute('selected', 'true')
    } else {
      //nothing
    }
    this.selectedTab = tab
  }
}
