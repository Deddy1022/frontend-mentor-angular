import { ProductListComponent } from './product-list/product-list.component';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from './definitions/type-definitions';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductListComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  productsList!: ReadonlyArray<Product>;
  orderCount: number = 0;
  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProductList()
  }

  getProductList(): void {
    this.productService.get<Product[]>("products").subscribe(
      products => this.productsList = products
    );
  }
}
