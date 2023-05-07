import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  image: string  = 'https://cdn-icons-png.flaticon.com/512/862/862856.png';
  slogan: string = 'Everything you need in one place';

  constructor() { }


}
