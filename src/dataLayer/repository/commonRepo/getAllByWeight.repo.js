"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { getWareHouseModel: modelToGetWareHouseByWeight } = require('../getWareHouseModel');
const getAllByWeight = (weight, sort = 1) => __awaiter(void 0, void 0, void 0, function* () {
    if (!weight && sort)
        throw new Error('weight or sort was not properly passed to the repository!');
    const wareHouseModel = modelToGetWareHouseByWeight();
    try {
        let wareHouseArray;
        if (weight) {
            wareHouseArray = yield wareHouseModel.find({ capacity: weight })
                .sort({ capacity: sort })
                .exec();
        }
        else {
            wareHouseArray = yield wareHouseModel.find({})
                .sort({ weight: sort })
                .exec();
        }
        if (!wareHouseArray || wareHouseArray.length === 0)
            return false;
        return wareHouseArray;
    }
    catch (error) {
        throw new Error('Error in getting wareHouse from the database by weight!');
    }
});
module.exports = {
    getAllByWeight
};
