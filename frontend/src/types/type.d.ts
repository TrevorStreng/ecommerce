export interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  gender: string;
  // colors: string[];
}
export interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  quantity: number;
}
