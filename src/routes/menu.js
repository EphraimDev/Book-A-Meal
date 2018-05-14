import express from 'express';
import menuController from '../controller/menu';

const router = express.Router();

router.get('/api/v1/menus', menuController.getAllMenu);
router.post('/api/v1/menus/add', menuController.createMenu);
router.put('/api/v1/menus/:id/edit', menuController.updateMenu);
router.get('/api/v1/menus/:id', menuController.getMenu);
router.delete('/api/v1/menus/:id/delete', menuController.deleteMenu);

const menuRouter = router;

export default menuRouter;