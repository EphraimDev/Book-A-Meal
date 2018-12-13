import express from 'express';
import mealRoutes from './meals';

const router = express.Router();

router.use(mealRoutes);

export default router;