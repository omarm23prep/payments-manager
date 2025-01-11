import { format } from 'date-fns';
import mongoose, { Schema, Document } from 'mongoose';

export interface IOrder extends Document {
  createdAt: string;
  customerName: string;
  service: string;
  status: string;
  total: number;
}

const OrderSchema: Schema<IOrder> = new Schema({
  createdAt: {
    type: String,
    default: () => format(new Date(), 'dd/MM/yyyy'),
  },
  customerName: {
    type: String,
    required: true,
    trim: true,
  },
  service: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ['Pending', 'Paid', 'Cancelled'],
    default: 'Pending',
  },
  total: {
    type: Number,
    required: true,
    min: 0,
  },
});

const Order = mongoose.model<IOrder>('Order', OrderSchema);
export default Order;
