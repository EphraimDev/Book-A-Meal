import express from 'express';
import mealController from '../controller/meal';

const router = express.Router();

router.get('/api/v1/meals', mealController.list);
router.post('/api/v1/meals/add-meal', mealController.create);
router.get('/api/v1/meals/:mealId', mealController.retrieve);
router.put('/api/v1/meals/:mealId', mealController.update);
router.delete('/api/v1/meals/:id/delete', mealController.delete);

export default router;

