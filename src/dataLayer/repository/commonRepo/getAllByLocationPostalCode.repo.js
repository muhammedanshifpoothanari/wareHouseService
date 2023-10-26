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
const { getWareHouseModel: modelToGetWareHouseByStartingPointPostalCode } = require('../getWareHouseModel');
const getAllByLoacationPointPostal = (postalCode) => __awaiter(void 0, void 0, void 0, function* () {
    if (!postalCode)
        throw new Error('starting point was not properly passed to the repository!');
    const WareHouseModel = modelToGetWareHouseByStartingPointPostalCode();
    try {
        const WareHouseArray = yield WareHouseModel.find({ postalCode: postalCode }).exec();
        if (!WareHouseArray || WareHouseArray.length === 0)
            return false;
        return WareHouseArray;
    }
    catch (error) {
        throw new Error('Error in getting WareHouse from the database by WareHouse startingpoint!');
    }
});
module.exports = {
    getAllByLoacationPointPostal
};
