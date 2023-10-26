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
const { getWareHouseModel: modelToGetWareHouseByStartingPoint } = require('../getWareHouseModel');
const getAllByStartingPoint = (startingPoint) => __awaiter(void 0, void 0, void 0, function* () {
    if (!startingPoint)
        throw new Error('starting point was not properly passed to the repository!');
    const wareHouseModel = modelToGetWareHouseByStartingPoint();
    try {
        const wareHouseArray = yield wareHouseModel.find({ startingPoint: startingPoint }).exec();
        if (!wareHouseArray || wareHouseArray.length === 0)
            return false;
        return wareHouseArray;
    }
    catch (error) {
        throw new Error('Error in getting WareHouse from the database by wareHouse startingpoint!');
    }
});
module.exports = {
    getAllByStartingPoint
};
