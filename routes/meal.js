import express from 'express';
import mealController from '../controller/meals';

const router = express.Router();


router.get('/api/v1/meals', mealController.getAllMeals);
router.post('/api/v1/meals/add', mealController.createMeal);
router.get('/api/v1/meals/:id', mealController.getMeal);
router.put('/api/v1/meals/:id', mealController.updateMeal);
router.delete('/api/v1/meals/:id', mealController.deleteMeal);

const mealRouter = router;

export default mealRouter;