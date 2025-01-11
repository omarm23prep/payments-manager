import { Request, Response } from 'express';
import { OrderService } from '../services/orders.service';

const orderService = new OrderService();

class OrderController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const order = await orderService.createOrder(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(400).json({ message: 'Error creating order', error });
    }
  }

  async getAll(_req: Request, res: Response): Promise<void> {
    try {
      const orders = await orderService.getOrders();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching orders', error });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const order = await orderService.getOrderById(req.params.id);
      if (!order) {
        res.status(404).json({ message: 'Order not found' });
        return;
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching order', error });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const updatedOrder = await orderService.updateOrder(req.params.id, req.body);
      if (!updatedOrder) {
        res.status(404).json({ message: 'Order not found' });
        return;
      }
      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(400).json({ message: 'Error updating order', error });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const deletedOrder = await orderService.deleteOrder(req.params.id);
      if (!deletedOrder) {
        res.status(404).json({ message: 'Order not found' });
        return;
      }
      res.status(200).json({ message: 'Order deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting order', error });
    }
  }
}

export default new OrderController();
