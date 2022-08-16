import {Component} from '@angular/core';
import {ProductModel} from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  product1 = new ProductModel("Test product", "It's a test product");
  allProducts:ProductModel[] = [this.product1];

  onAddProduct(newProduct:{productName:string,productDetail:string}){
    this.allProducts.push({
      productName:newProduct.productName,
      productDetail:newProduct.productDetail,
    });
  }
}
