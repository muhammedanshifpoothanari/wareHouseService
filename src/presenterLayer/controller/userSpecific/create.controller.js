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
const { createUseCase: wrappedFunctionToSet } = require('../../../domainLayer/useCase/index');
const setCntrl = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { wareHouseName, wareHouseType, wareHouseDetails, location, locationPostalCode, ownerId, capacity, buildingNumber, advanceRequired, contactInfo: { phone, email, }, workingTime: [{ day, open, close, }], expectedPricePerTonneHr, } = data;
        const newData = {
            wareHouseName,
            wareHouseType,
            wareHouseDetails,
            location,
            locationPostalCode,
            ownerId,
            capacity,
            buildingNumber,
            advanceRequired,
            contactInfo: {
                phone,
                email,
            },
            workingTime: [{
                    day,
                    open,
                    close,
                }],
            expectedPricePerTonneHr,
        };
        const isCreated = yield wrappedFunctionToSet(newData);
        if (isCreated)
            return isCreated;
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    setCntrl
};
