/* eslint-disable class-methods-use-this */
import db from '../db/orders';
import moment from 'moment';

class OrderController {
    getAllOrders(req, res) {
        return res.status(200).send({
            message: 'Orders retrieved successfully',
            orders: db,
            success: 'true'
        });
    }

    getOrder(req, res) {
        const id = parseInt(req.params.id, 10);

        db.map((order) => {
            if (order.id === id) {
                return res.status(200).send({
                    order,
                    message: 'Order retrieved successfully',
                    success: 'true'
                });
            }
        });

        return res.status(404).send({
            message: 'order does not exist',
            success: 'false'
        });
    }

    createOrder(req, res) {
        if (!req.body.meal && !req.body.units) {
            return res.status(404).send({
                message: 'Select a meal and number of plates',
                success: 'false'
            });
        } else if (!req.body.meal) {
            return res.status(400).send({
                message: 'Select a meal',
                success: 'false'
            });
        } else if (!req.body.units) {
            return res.status(400).send({
                message: 'Select number of plates',
                success: 'false'
            });
        }

        const order = {
            date: moment().format('L'),
            id: db.length + 1,
            meal: req.body.meal,
            time: moment().format('LT'),
            units: req.body.units
        };

        db.push(order);

        return res.status(201).send({
            message: 'Order created successfully',
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

        if (!req.body.meal && !req.body.units) {
            return res.status(400).send({
                message: 'Select a meal and the number of plates you want',
                success: 'false'
            });
        } else if (!req.body.meal) {
            return res.status(400).send({
                message: 'Meal name is required',
                success: 'false'
            });
        } else if (!req.body.units) {
            return res.status(400).send({
                message: 'Select number of plates',
                success: 'false'
            });
        } else if (!orderFound) {
            return res.status(404).send({
                message: 'Order not found',
                success: 'false'
            });
        }

        const newOrder = {
            date: moment().format('L') || orderFound.date,
            id: orderFound.id,
            meal: req.body.meal || orderFound.meal,
            time: moment().format('LT') || orderFound.time,
            units: req.body.units || orderFound.units 
        };

        db.splice(itemIndex, 1, newOrder);

        return res.status(201).send({
            message: 'Order changed successfully',
            newOrder,
            success: 'true'
        });
    }

    deleteOrder(req, res) {
        const id = parseInt(req.params.id, 10);
        let itemIndex;
        let orderFound;

        db.map((order, index) => {
            if (order.id === id) {
                orderFound = order;
                itemIndex = index;
            }
        });

        if (!orderFound) {
            return res.status(404).send({
                message: 'Order not found',
                success: 'false'
            });
        }
        db.splice(itemIndex, 1);

        return res.status(200).send({
            message: 'Order deleted successfully',
            success: 'true'
        });
    }
}

const orderController = new OrderController();

export default orderController;