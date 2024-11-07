import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OrderedProducts } from '../definitions/type-definitions';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  @Input() totalItems!: number;
  @Input() addedItems!: ReadonlyArray<OrderedProducts>;
  @Output() productDeletion: EventEmitter<OrderedProducts> = new EventEmitter();

  deleteOne(product: OrderedProducts): void
  {
    this.productDeletion.emit(product);
  }
}
