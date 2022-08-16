import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  @Input("myProduct") product!: { productName: string; productDetail: string; };

  constructor() {
  }

  ngOnInit(): void {
  }

}
