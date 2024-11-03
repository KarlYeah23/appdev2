import { OrderItem } from "./order-item";

export class Order {
    id: number = 1;
    customerId: number = 0;
    status: string = '';
    totalPrice: number = 0;
    items: OrderItem[] = [];
}