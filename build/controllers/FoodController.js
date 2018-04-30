"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Foods_1 = require("../models/Foods");
function getAllFoods(req, res, next) {
    Foods_1.default.find(function (err, foods) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ foods: foods });
    });
}
exports.getAllFoods = getAllFoods;
function getFoodById(req, res, next) {
    var id = req.params.id;
    Foods_1.default.findById(id, function (err, food) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ food: food });
    });
}
exports.getFoodById = getFoodById;
function createFood(req, res, next) {
    var name = req.body.name;
    var state = req.body.state;
    var calories = req.body.calories;
    var proteins = req.body.proteins;
    var lipids = req.body.lipids;
    var carbohydrates = req.body.carbohydrates;
    var water = req.body.water;
    var ashes = req.body.ashes;
    console.log(req.body);
    if (!name) {
        res.status(422).json({ err: 'Name is required.' });
        return;
    }
    if (!state) {
        res.status(422).json({ err: 'State is required.' });
        return;
    }
    if (!calories) {
        res.status(422).json({ err: 'Calories is required.' });
        return;
    }
    if (!proteins) {
        res.status(422).json({ err: 'Proteins is required.' });
        return;
    }
    if (!lipids) {
        res.status(422).json({ err: 'Lipids is required.' });
        return;
    }
    if (!carbohydrates) {
        res.status(422).json({ err: 'Carbohydrates is required.' });
        return;
    }
    if (!water) {
        res.status(422).json({ err: 'Water is required.' });
        return;
    }
    if (!ashes) {
        res.status(422).json({ err: 'Ashes is required.' });
        return;
    }
    var food = new Foods_1.default({
        name: name,
        state: state,
        calories: calories,
        proteins: proteins,
        lipids: lipids,
        carbohydrates: carbohydrates,
        water: water,
        ashes: ashes
    });
    food.save(function (err, food) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ food: food });
    });
}
exports.createFood = createFood;
function updateFood(req, res, next) {
    var id = req.params.id;
    Foods_1.default.findByIdAndUpdate(id, req.body, function (err, food) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ food: food });
    });
}
exports.updateFood = updateFood;
function deleteFood(req, res, next) {
    var id = req.params.id;
    Foods_1.default.findByIdAndRemove(id, function (err, food) {
        if (err) {
            res.status(500).json({ err: err });
        }
        res.status(200).json({ food: food });
    });
}
exports.deleteFood = deleteFood;
//# sourceMappingURL=FoodController.js.map