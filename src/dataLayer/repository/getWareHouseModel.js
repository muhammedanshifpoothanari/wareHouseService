"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
// Create a Mongoose model for the truck
const getWareHouseModel = () => {
    const entityName = 'wareHouseInfo';
    const { wareHouseSchema } = require('../database/schema/wareHouse.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!wareHouseSchema)
        throw new Error('warehouse schema not found!');
    return mongoose_1.default.model(entityName, wareHouseSchema);
};
module.exports = {
    getWareHouseModel
};
