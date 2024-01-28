import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../../HelperInterfaces/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  private cartElements = new BehaviorSubject<Array<Product>>(
    [
      // {
      //   id: 0,
      //   title: 'string',
      //   description: 'string',
      //   price: 0,
      //   discountPercentage: 0,
      //   rating: 0,
      //   stock: 0,
      //   brand: '',
      //   category: '',
      //   thumbnail: '',
      //   images: ['string'],
      //   createdAt: ''
      // }
    ]
  );

  getProducts(){
    return this.cartElements.asObservable();
  }

  addProduct(product: Product){
    // no array.push() so we use concat() instead
    this.cartElements.next(this.cartElements.getValue().concat(product));
  }
  
}
