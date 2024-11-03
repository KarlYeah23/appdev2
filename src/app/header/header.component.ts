import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  public menus: string[][] = []
  categories: any[] = []

  constructor() {
    this.menus = [
      ["Featured", 'featured'],
      ["Store", 'store'],
      ["About Us", 'aboutus'],
      ["Contact", 'contact'],
    ]
  }

  isAdvisor(isAdvisor: boolean) {
  }

  checkProduct(product: string) {
  }

}
