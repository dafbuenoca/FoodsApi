import * as mongoose from 'mongoose';
import { Double, Decimal128 } from 'bson';

const Schema = mongoose.Schema;

const FoodShema = new Schema({

    
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
        type: Decimal128,
        default: 0.0,
        required: true
    },
    lipids: {
        type: Decimal128,
        default: 0.0,
        required: true
    },
    carbohydrates: {
        type: Decimal128,
        default: 0.0,
        required: true
    },
    water: {
        type: Decimal128,
        default: 0.0,
        required: true
    },
    ashes: {
        type: Decimal128,
        default: 0.0,
        required: true
    }

});

export default mongoose.model('Food', FoodShema);