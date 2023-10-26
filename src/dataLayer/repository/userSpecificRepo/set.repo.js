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
const { getWareHouseModel: modelToCreateWareHouse } = require('../getWareHouseModel');
const createWareHouse = (wareHouseData) => __awaiter(void 0, void 0, void 0, function* () {
    if (!wareHouseData) {
        throw new Error('wareHouseData was not properly passed to the repository!');
    }
    const wareHouseModel = modelToCreateWareHouse();
    try {
        const newWareHouse = new wareHouseModel(Object.assign(Object.assign({}, wareHouseData), { isBlocked: false, isVerified: false, status: 'active', createdAt: new Date(), expiresAt: new Date() }));
        // Save the new truck to the database
        const doneTheJob = yield newWareHouse.save();
        if (!doneTheJob)
            return false;
        // Return the newly created wareHouse
        return true;
    }
    catch (error) {
        throw new Error(`Error in creating the wareHouse in the database: ${error}`);
    }
});
module.exports = {
    createWareHouse,
};
