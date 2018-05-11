/* eslint-disable class-methods-use-this */
import db from '../db/menu';

class MenuController {
    getAllMenu(req, res) {
        return res.status(200).send({
            menus: db,
            message: 'Menu retrieved successfully',
            success: 'true'
        });
    }

    getMenu(req, res) {
        const id = parseInt(req.params.id, 10);

        db.map((menu) => {
            if (menu.id === id) {
                return res.status(200).send({
                    menu,
                    message: 'menu retrieved successfully',
                    success: 'true'
                });
            }
        });

        return res.status(404).send({
            message: 'menu does not exist',
            success: 'false'
        });
    }

    createMenu(req, res) {
        if (!req.body.meals) {
            return res.status(400).send({
                message: 'Select a meal',
                success: 'false'
            });
        }

        const menu = {
            id: db.length + 1,
            meals: req.body.meals
        };

        db.push(menu);

        return res.status(201).send({
            menu,
            message: 'Menu created successfully',
            success: 'true'
        });
    }

    updateMenu(req, res) {
        const id = parseInt(req.params.id, 10);
        let itemIndex, menuFound;

        db.map((menu, index) => {
            if (menu.id === id) {
                itemIndex = index;
                menuFound = menu;
            }
        });

        if (!req.body.meals) {
            return res.status(400).send({
                message: 'Meal name is required',
                success: 'false'
            });
        } else if (!menuFound) {
            return res.status(404).send({
                message: 'Menu not found',
                success: 'false'
            });
        }

        const newMenu = {
            id: menuFound.id,
            meals: req.body.meals || menuFound.meals
        };

        db.splice(itemIndex, 1, newMenu);

        return res.status(201).send({
            message: 'menu updated successfully',
            newMenu,
            success: 'true'
        });
    }

    deleteMenu(req, res) {
        const id = parseInt(req.params.id, 10);
        let itemIndex;
        let menuFound;

        db.map((menu, index) => {
            if (menu.id === id) {
                menuFound = menu;
                itemIndex = index;
            }
        });

        if (!menuFound) {
            return res.status(404).send({
                message: 'Menu not found',
                success: 'false'
            });
        }
        db.splice(itemIndex, 1);

        return res.status(200).send({
            message: 'Menu deleted successfully',
            success: 'true'
        });
    }
}

const menuController = new MenuController();

export default menuController;