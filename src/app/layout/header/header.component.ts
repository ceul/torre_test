import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public itsScrolled: boolean
  public clickMenu: boolean
  public clickOnUser: boolean

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    let pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    let max = document.documentElement.scrollHeight;
    if (pos != max) {
      this.itsScrolled = true
    } else {
      this.itsScrolled = false
    }
  }

  constructor(
    private titleService: Title,
    private router: Router
  ) { }

  ngOnInit() {
    try {
      this.itsScrolled = false
      this.clickMenu = false
      this.clickOnUser = false
      this.titleService.setTitle(`Fing your dream job | Torre.co`)
    } catch (error) {
      console.log(`An error ocurred on ngOnInit => HeaderComponent`)
    }
  }

  public onClickMobileMenu() {
    try {
      this.clickMenu = this.clickMenu !== true
    } catch (error) {
      console.log(`An error ocurred on onClickMobileMenu => HeaderComponent`)
    }
  }

}
