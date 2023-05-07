import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {
  productsOfFruits = [
    {
      id: 1,
      name: 'Apple',
      avaliable: 'Avaliable',
      price: 100,
      description: 'This is an apple',
      image: 'https://freesvg.org/img/Stylized-Apple-Leaves.png'
    },
    {
      id: 2,
      name: 'Banana',
      avaliable: 'Avaliable',
      price: 200,
      description: 'This is a banana',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Bananas.svg/1280px-Bananas.svg.png'
    },
    {
      id: 3,
      name: 'Mango',
      avaliable: 'Avaliable',
      price: 400,
      description: 'This is a mango',
      image: 'https://www.svgrepo.com/show/397130/mango.svg'
    },
    {
      id: 4,
      name: 'Pineapple',
      avaliable: 'Not avaliable',
      price: 500,
      description: 'This is a pineapple',
      image: 'https://www.svgheart.com/wp-content/uploads/2021/11/pineapple-summer-fruit-free-svg-file-SvgHeart.Com-2.png'
    }
  ];


}
