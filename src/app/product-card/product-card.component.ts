import { Component, Input } from '@angular/core';
import { Product } from '../../HelperInterfaces/Product';
import { ProductDiscountPipe } from '../Pipes/product-discount.pipe';
import { DatePipe } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [ProductDiscountPipe, DatePipe, RatingModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input() product!: Product;

  constructor(private routeObj : Router){}
  
  view(id: number){
    this.routeObj.navigate(['details', id])
  }

  getIntegral(value: number){
    return Math.floor(value);
  }

}
