/* eslint-disable class-methods-use-this */
import db from '../db/db';

class MealsController {
    getAllMeals(req, res) {
        return res.status(200).send({
            meals: db,
            message: 'meals retrieved successfully',
            success: 'true'
        });
    }

    getMeal(req, res) {
        const id = parseInt(req.params.id, 10);

        db.map((meal) => {
            if (meal.id === id) {
                return res.status(200).send({
                    meal,
                    message: 'meal retrieved successfully',
                    success: 'true'
                });
            }
        });

        return res.status(404).send({
            message: 'meal does not exist',
            success: 'false'
        });
    }

    createMeal(req, res) {
        if (!req.body.name && !req.body.price) {
            return res.status(400).send({
                message: 'Meal name and price is required',
                success: 'false'
            });
        } else if (!req.body.price) {
            return res.status(400).send({
                message: 'price is required',
                success: 'false'
            });
        } else if (!req.body.name) {
            return res.status(400).send({
                message: 'Meal name is required',
                success: 'false'
            });
        }
        const meal = {
            id: db.length + 1,
            name: req.body.name,
            price: req.body.price
        };

        db.push(meal);

        return res.status(201).send({
            meal,
            message: 'Meal added successfully',
            success: 'true'
        });
    }

    updateMeal(req, res) {
        const id = parseInt(req.params.id, 10);
        let itemIndex, mealFound;

        db.map((meal, index) => {
            if (meal.id === id) {
                itemIndex = index;
                mealFound = meal;
            }
        });

        if (!req.body.name && !req.body.price) {
            return res.status(400).send({
                message: 'Meal name and price is required',
                success: 'false'
            });
        } else if (!req.body.price) {
            return res.status(404).send({
                message: 'price is required',
                success: 'false'
            });
        } else if (!req.body.name) {
            return res.status(404).send({
                message: 'Meal name is required',
                success: 'false'
            });
        } else if (!mealFound) {
            return res.status(404).send({
                message: 'Meal not found',
                success: 'false'
            });
        }

        const newMeal = {
            id: mealFound.id,
            name: req.body.name || mealFound.name,
            price: req.body.price || mealFound.price
        };

        db.splice(itemIndex, 1, newMeal);

        return res.status(201).send({
            message: 'meal updated successfully',
            newMeal,
            success: 'true'
        });
    }

    deleteMeal(req, res) {
        const id = parseInt(req.params.id, 10);
        let itemIndex;
        let mealFound;

        db.map((meal, index) => {
            if (meal.id === id) {
                mealFound = meal;
                itemIndex = index;
            }
        });

        if (!mealFound) {
            return res.status(404).send({
                message: 'meal not found',
                success: 'false'
            });
        }
        db.splice(itemIndex, 1);

        return res.status(200).send({
            message: 'Meal deleted successfully',
            success: 'true'
        });
    }
}

const mealController = new MealsController();

export default mealController;