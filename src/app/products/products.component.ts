import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Product } from '../Core/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products: Product[]=[];
  constructor() { }

  ngOnInit(): void {
    this.products=[
        {id: "1", title: "T-shirt 1", price: 18, quantity: 0, like: 0, picture:"https://img.freepik.com/photos-gratuite/t-shirts-blancs-espace-copie-fond-gris_53876-104920.jpg?w=2000"},
    {id: "2", title: "T-shirt 2", price: 21, quantity: 10, like: 0,picture:"https://media.everlane.com/image/upload/c_fill,dpr_2,f_auto,g_face:center,q_auto,w_auto/v1/i/8b27bc0e_969f.jpg"},
    {id: "3", title: "T-shirt 3", price: 16, quantity: 8, like: 0,picture:"https://media.gq.com/photos/5ca7ad6d1656fe4e4c2710d7/master/w_1280%2Cc_limit/GQ-Best-Stuff-T's-lemongrass-3x2.jpg"},]
  }


 Buy(id:string){
    /*this.products.map((product)=>{
        if(product.id.match(id)){
            y=product.quantity-1;
        }
    })
  }
  */
 
    this.products.map((product)=>product.id.match(id)&&product.quantity--)
}

}