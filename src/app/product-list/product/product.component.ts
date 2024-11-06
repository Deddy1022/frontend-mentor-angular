import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderedProducts, Product } from '../../definitions/type-definitions';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input() product!: Product;
  products: OrderedProducts[] = [];
  @Output() addCart: EventEmitter<OrderedProducts> = new EventEmitter();
  currentCount: number = 0;
  currentState: "display" | "" = "display";

  addToCart(name: string, price: number, operator: string): void {
    let total = 0;
    switch(operator) {
      case "+":
        total += this.currentCount++;
        break;
      case "-":
        total -= this.decrement();
        break;
    }
    if(total <= 0) return;
    let totalPrice = price * total;
    const productItem: OrderedProducts = {
      name,
      total,
      price,
      totalPrice
    }
    this.addCart.emit(productItem);
  }

  private increment = (): number => this.currentCount++
  private decrement = (): number => {
    if(this.currentCount <= 0) return 0;
    return this.currentCount--
  }

  private existingProduct(product: OrderedProducts): number {
    return this.products.findIndex(p => p.name == product.name);
  }

  toggleState(value: typeof this.currentState): void {
    this.currentState = value;
  }
}
