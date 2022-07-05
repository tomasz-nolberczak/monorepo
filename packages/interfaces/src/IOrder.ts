import IProduct from "./IProduct";

export default interface IOrder {
  name: string;
  address: string;
  product: IProduct;
  quantity: number;
}
