import * as express from 'express';

import {
    getAllFoods,
    getFoodById,
    createFood,
    updateFood,
    deleteFood    
} from '../controllers/FoodController';

export default (app) => {

    const apiRoutes = express.Router();
    const foodRoutes = express.Router();
    
    /**
     * FOOD ROUTES
     */
    
     apiRoutes.use('/foods', foodRoutes);

    foodRoutes.get('/', getAllFoods);

    foodRoutes.get('/:id', getFoodById);

    foodRoutes.post('/', createFood);

    foodRoutes.put('/:id', updateFood); 

    foodRoutes.delete('/:id', deleteFood);

    app.use('/api', apiRoutes);

};

