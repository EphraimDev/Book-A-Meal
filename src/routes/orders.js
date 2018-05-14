import express from 'express';
import orderController from '../controller/order';

const router = express.Router();


router.get('/api/v1/orders', orderController.getAllOrders);
router.get('/api/v1/orders/:id', orderController.getOrder);
router.post('/api/v1/orders/add', orderController.createOrder);
router.put('/api/v1/orders/:id/edit', orderController.updateOrder);
router.delete('/api/v1/orders/:id/delete', orderController.deleteOrder);

const orderRouter = router;

export default orderRouter;