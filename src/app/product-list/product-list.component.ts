import { OrderedProducts, Product } from './../definitions/type-definitions';
import { OrderComponent } from './../order/order.component';
import { Component, Input } from '@angular/core';
import { ProductComponent } from './product/product.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [OrderComponent, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  @Input() productsList!: ReadonlyArray<Product>;
  @Input() orderCount!: number;
  totalItems: number = 0;
  addedItems: OrderedProducts[] = new Array();

  addItems(product: OrderedProducts) {
    let index = this.findProductIndex(product);
    if(index == -1)
    {
      this.addedItems.push(product);
    }
    else{
      this.addedItems[index] = {
        ...this.addedItems[index],
        total: product.total,
        totalPrice: product.totalPrice
      };
    }
  }

  deleteItem(product: OrderedProducts): void
  {
    let currentIndex = this.findProductIndex(product);
    if(this.addedItems.includes(this.addedItems[currentIndex]))
    {
      this.addedItems = this.addedItems.filter((_, i, arr) => arr[i] != arr[currentIndex]);
    }
  }

  findProductIndex(product: OrderedProducts): number
  {
    return this.addedItems.findIndex(p => p.name == product.name);
  }
}
