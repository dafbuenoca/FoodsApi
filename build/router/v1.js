"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var FoodController_1 = require("../controllers/FoodController");
exports.default = (function (app) {
    var apiRoutes = express.Router();
    var foodRoutes = express.Router();
    /**
     * FOOD ROUTES
     */
    apiRoutes.use('/foods', foodRoutes);
    foodRoutes.get('/', FoodController_1.getAllFoods);
    foodRoutes.get('/:id', FoodController_1.getFoodById);
    foodRoutes.post('/', FoodController_1.createFood);
    foodRoutes.put('/:id', FoodController_1.updateFood);
    foodRoutes.delete('/:id', FoodController_1.deleteFood);
    app.use('/api', apiRoutes);
});
//# sourceMappingURL=v1.js.map