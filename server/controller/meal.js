import {Meal} from '../models';

/**
 * @exports
 * @class MealController
 */
class MealController {
  /**
   * Creates a new meal
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  /*static async create(req, res, next) {
    const {
      title,
      description,
      price,
      img
    } = req.body;

    return Meal.find({
      where: {
        userId: req.userId,
        title: req.body.title
      }
    })
      .then((meal) => {
        if (meal) {
          res.status(409).json({
            status: 'error',
            message: 'Meal already exists'
          });
        } else {
          return Meal.create({
            userId: req.userId,
            title,
            description,
            price,
            img
          });
        }
      })
      .then((newMeal) => {
        if (newMeal) {
          req.app.emit('MealCreated', newMeal);

          res.status(201).json({
            status: 'success',
            message: 'Meal created successfully',
            meal: newMeal
          });
        }
      })
      .catch(err => next(err));
  }

  /**
   * Deletes a meal
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  /*static async delete(req, res, next) {
    const { mealId } = req.params;
    const {userId} = req;
    const mealItem = await Meal.findOne({ where: { mealId, userId }});

    if (!mealItem) return res.status(404).json({
        message: 'Meal not found',
        success: false
    });

    await mealItem.destroy();

    return res.status(200).json({ 
        message: 'Meal deleted successfully',
        success: true
     });
  }

  /**
   * Return meal that match mealId
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  /*static async getMeal(req, res, next) {
    const { mealId } = req.params;
    const {userId} = req;

    return Meal.find({
      where: {
        mealId,
        userId
      }
    })
      .then((foundMeal) => {
        if (foundMeal) {
          return res.status(200).json({
            meal: foundMeal,
            success: true
          });
        }

        return res.status(404).json({
          message: 'Meal not found',
          success: false
        });
      })
      .catch(err => next(err));
  }

  /**
   * Get all meals
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  /*static getMeals(req, res, next) {
    return Meal.findAll({
      where: {
        userId: req.userId
      }
    })
      .then(meals => res.status(200).json({
        meals,
        success: true
      }))
      .catch(err => next(err));
  }

  /**
   * Update an existing meal
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  /*static async update(req, res, next) {
    const { mealId } = req.params;
    const {userId} = req;
    const {title, description, price, img} = req.body;
    //price = parseFloat(price);

    const mealItem = await Meal.findOne({where: { mealId, title, userId }});
    const updateMeal =await mealItem.update({description, price, img});

    if (!mealItem) {
        return res.status(404).json({
            message: 'Meal not found',
            success: false
        })
    } else {
        return res.status(200).json({
            meal: updateMeal,
            message: 'Meal updated successfully',
            success: true 
        })
    }
  }*/

  /**
   * Creates a new meal
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static async create(req, res) {
      const {title, description, price, img} = req.body;
      const {mealId, userId} = req.params;

      return Meal.create({
          title,
          description,
          price,
          img,
          mealId,
          userId
      })
      .then(meal => res.status(201).json({
          meal,
          message: 'Meal created successfully',
          success: true
      }))
      .catch(error => res.status(400).json({
          message: "Meal wasn't created successfully",
          success: false
      }))
  }

  /**
   * Update an existing meal
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static async update(req, res) {
      return Meal.find({
          where: {
              mealId: req.params.mealId,
              userId: req.params.userId
            },
        })
      .then(meal => {
          if (!meal) {
              return res.status(404).json({
                  message: 'Meal not found',
                  success: false
              })
          }
          return meal.update(req.body, { fields: Object.keys(req.body) })
          .then((updatedMeal) => res.status(200).json({
              updatedMeal,
              message: 'Meal updated successfully',
              success: true
          }))
          .catch((error) => res.status(400).json({
              message: "Meal update was unsuccessful",
              success: false
          }));
      })
      .catch((error) => res.status(400).json({
          message: 'Meal not found',
          success: false
      }))
  }

  /**
   * Deletes a meal
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static async delete(req, res) {
      const mealItem = Meal.find({
          where: {
              mealId: req.params.mealId,
              userId: req.params.userId
            },
        })
      return mealItem
      .then(meal => {
          if (!meal) {
              return res.status(400).json({
                  message: 'Meal not found',
                  success: false
              })
          } else {
              return meal.destroy()
              .then(() => res.status(204).json({
                  message: 'Meal successfully deleted',
                  success: true
              }))
              .catch(error => res.status(400).json({
                  message: "Meal wasn't deleted",
                  success: false
              }));
          }
      })
      .catch(error => res.status(400).json(error));
  } 

   /**
   * Return meal that match mealId
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @param {function} next - middleware next (for error handling)
   * @return {json} res.json
   */
  static async retrieve(req, res) {
      return Meal.findById(req.params.mealId, {
          include: [{
              model: User,
              as: 'meals'
          }],
      })
      .then(meal => {
          if (!meal) {
              return res.status(404).json({
                  message: 'Meal not found',
                  success: false
              })
          }
          return res.status(200).json({
              meal,
              message: 'Meal found',
              success: true
          })
      })
      .catch(error => res.status(400).json(error));
  }

   /**
   * Return all meal
   *
   * @staticmethod
   * @param  {object} req - Request object
   * @param {object} res - Response object
   * @return {json} res.json
   */
  static async list(req, res) {
      const allMeal = Meal.findAll({
          where: {
              userId: req.userId
          }
      })
      return allMeal
      .then(meals => res.status(200).json({
        meals,
        message: 'Meals listed successfully',
        success: true  
      }))
      .catch(error => res.status(400).json(error));
  }
}

export default MealController;
