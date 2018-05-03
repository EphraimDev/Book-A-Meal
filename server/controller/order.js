/* eslint-disable class-methods-use-this */
import db from '../db/orders';

class OrderController {
    getAllOrders(req, res) {
        return res.status(200).send({
            message: 'Orders retrieved successfully',
            orders: db,
            success: 'true'
        });
    }

    createOrder(req, res) {
        if (!req.body.meal) {
            return res.status(400).send({
                message: 'Select a meal',
                success: 'false'
            });
        } else if (!req.body.date) {
            return res.status(400).send({
                message: 'Select a date',
                success: 'false'
            });
        }
        const order = {
            date: req.body.date,
            id: db.length + 1,
            meal: req.body.meal
        };

        db.push(order);

        return res.status(201).send({
            message: 'Menu created successfully',
            order,
            success: 'true'
        });
    }

    updateOrder(req, res) {
        const id = parseInt(req.params.id, 10);
        let itemIndex, orderFound;

        db.map((order, index) => {
            if (order.id === id) {
                itemIndex = index;
                orderFound = order;
            }
        });

        if (!orderFound) {
            return res.status(404).send({
                message: 'Order not found',
                success: 'false'
            });
        }

        if (!req.body.meal) {
            return res.status(400).send({
                message: 'Meal name is required',
                success: 'false'
            });
        } else if (!req.body.date) {
            return res.status(400).send({
                message: 'date is required',
                success: 'false'
            });
        }

        const newOrder = {
            date: req.body.date || orderFound.date,
            id: orderFound.id,
            meal: req.body.meal || orderFound.meal
        };

        db.splice(itemIndex, 1, newOrder);

        return res.status(201).send({
            message: 'Order changed successfully',
            newOrder,
            success: 'true'
        });
    }
}

const orderController = new OrderController();

export default orderController;