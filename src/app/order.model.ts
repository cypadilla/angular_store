import { Product } from "./product.model";

export interface Order{
    // id?:string;
    amount:number;
    product:Product;
}