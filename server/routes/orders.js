import express from 'express';
import orderController from '../controller/order';

const router = express.Router();


router.get('/api/v1/orders', orderController.getAllOrders);
router.post('/api/v1/orders/add', orderController.createOrder);
router.put('/api/v1/orders/:id/edit', orderController.updateOrder);

const orderRouter = router;

export default orderRouter;