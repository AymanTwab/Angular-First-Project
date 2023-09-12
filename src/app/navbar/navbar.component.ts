import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent {

  @HostListener("document:scroll")

  navbarOnScroll() {
    if ((window.pageYOffset) > 20) {
      $('.navbar').addClass('navbarOnScroll')
    } else
      $('.navbar').removeClass('navbarOnScroll')
  }




}
