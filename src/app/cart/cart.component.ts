import { Component } from '@angular/core';
import { CartService } from '../Services/cart.service';
import { Product } from '../../HelperInterfaces/Product';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

  constructor(private cartService: CartService){}
  
  myData!: Product[] ;// = this.cartService.getProducts().subscribe((data) => data);

  ngOnInit(){
    this.cartService.getProducts().subscribe( (dataOfProducts) => this.myData = dataOfProducts );
  }

}
