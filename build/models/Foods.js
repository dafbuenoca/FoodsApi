"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var bson_1 = require("bson");
var Schema = mongoose.Schema;
var FoodShema = new Schema({
    name: {
        type: String,
        default: '',
        required: true
    },
    state: {
        type: String,
        default: '',
        required: true
    },
    calories: {
        type: Number,
        default: 0,
        required: true
    },
    proteins: {
        type: bson_1.Decimal128,
        default: 0.0,
        required: true
    },
    lipids: {
        type: bson_1.Decimal128,
        default: 0.0,
        required: true
    },
    carbohydrates: {
        type: bson_1.Decimal128,
        default: 0.0,
        required: true
    },
    water: {
        type: bson_1.Decimal128,
        default: 0.0,
        required: true
    },
    ashes: {
        type: bson_1.Decimal128,
        default: 0.0,
        required: true
    }
});
exports.default = mongoose.model('Food', FoodShema);
//# sourceMappingURL=Foods.js.map