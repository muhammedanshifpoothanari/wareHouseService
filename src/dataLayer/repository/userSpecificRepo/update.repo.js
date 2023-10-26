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
const { getWareHouseModel: modelToUpdateWareHouse } = require('../getWareHouseModel');
// Define a function to update wareHouse information
const updateWareHouse = (id, updatedWareHouseData) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id, updatedWareHouseData, 'jhjgvfreer');
    if (!id || !updatedWareHouseData) {
        throw new Error('ID and updated user data must be provided!');
    }
    const wareHouseModel = modelToUpdateWareHouse();
    try {
        // Find the wareHouse by ID
        const wareHouse = yield wareHouseModel.findById(id).exec();
        if (!wareHouse) {
            throw new Error('wareHouse not found in the database!');
        }
        // Update user fields based on the updatedWareHouseData object
        for (const key of Object.keys(updatedWareHouseData)) {
            wareHouse[key] = updatedWareHouseData[key];
        }
        // Save the updated user document
        const updatedWareHouse = yield wareHouse.save();
        if (updatedWareHouse === null)
            return false;
        return true;
    }
    catch (error) {
        throw new Error(`Error in updating the wareHouse in the database: ${error}`);
    }
});
module.exports = {
    updateWareHouse,
};
