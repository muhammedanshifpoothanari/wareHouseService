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
const { getWareHouseModel: modelToGetWareHouseByOwnerId } = require('../getWareHouseModel');
const getAllByOwnerId = (ownerId) => __awaiter(void 0, void 0, void 0, function* () {
    if (!ownerId)
        throw new Error('load owner id was not properly passed to the repository!');
    const wareHouseModel = modelToGetWareHouseByOwnerId();
    try {
        const wareHouseArray = yield wareHouseModel.find({ ownerId: ownerId }).exec();
        if (!wareHouseArray || wareHouseArray.length === 0)
            return false;
        return wareHouseArray;
    }
    catch (error) {
        throw new Error('Error in getting wareHouse from the database by owner id!');
    }
});
module.exports = {
    getAllByOwnerId
};
