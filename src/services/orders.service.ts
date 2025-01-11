import Order, { IOrder } from '../schemas/orders.schema';

export class OrderService {
  async createOrder(data: Partial<IOrder>): Promise<IOrder> {
    const order = new Order(data);
    return order.save();
  }

  async getOrders(): Promise<IOrder[]> {
    return Order.find();
  }

  async getOrderById(id: string): Promise<IOrder | null> {
    return Order.findById(id);
  }

  async updateOrder(id: string, data: Partial<IOrder>): Promise<IOrder | null> {
    return Order.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteOrder(id: string): Promise<IOrder | null> {
    return Order.findByIdAndDelete(id);
  }
}
