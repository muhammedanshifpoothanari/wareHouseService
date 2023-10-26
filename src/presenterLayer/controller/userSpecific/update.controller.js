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
const { updateUseCase: wrappedFunctionToUpdate } = require('../../../domainLayer/useCase/index');
const updateCntrl = (data) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { _id, wareHouseName, wareHouseType, wareHouseDetails, contactInfo: { phone, email, }, location, locationPostalCode, ownerId, capacity, buildingNumber, advanceRequired: Boolean, workingTime: [{ day, open, close, }], expectedPricePerTonneHr, wareHouseHistory: [{ load: { loadId, }, startedAt, endedAt, },], expiresAt, status, bids: [{ userId, bidAmount, bidStatus, bidTime, },], } = data;
        const newData = {
            _id,
            wareHouseName,
            wareHouseType,
            wareHouseDetails,
            contactInfo: {
                phone,
                email,
            },
            location,
            locationPostalCode,
            ownerId,
            capacity,
            buildingNumber,
            advanceRequired: Boolean,
            workingTime: [{
                    day,
                    open,
                    close,
                }],
            expectedPricePerTonneHr,
            wareHouseHistory: [
                {
                    load: {
                        loadId,
                    },
                    startedAt,
                    endedAt,
                },
            ],
            expiresAt,
            status,
            bids: [
                {
                    userId,
                    bidAmount,
                    bidStatus,
                    bidTime,
                },
            ],
        };
        const isUpdated = yield wrappedFunctionToUpdate(newData);
        if (isUpdated)
            return isUpdated;
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    updateCntrl
};
