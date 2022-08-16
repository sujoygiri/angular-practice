import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-products',
  templateUrl: './add-products.component.html',
  styleUrls: ['./add-products.component.css']
})
export class AddProductsComponent implements OnInit {

  @Output() productCreated = new EventEmitter<{productName:string,productDetail:string}>();

  newProductName:string = "";
  newProductDetail:string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addProductName(p_name:string){
    this.newProductName = p_name;
  }
  addProductDetail(p_detail:string){
    this.newProductDetail = p_detail;
  }

  onAddProduct(){
    this.productCreated.emit({productName:this.newProductName,productDetail:this.newProductDetail});
  }

}
