"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const WareHouseSchema = new mongoose_1.Schema({
    wareHouseName: String,
    wareHouseType: String,
    wareHouseDetails: String,
    contactInfo: {
        phone: String,
        email: String,
    },
    location: String,
    locationPostalCode: Number,
    ownerId: String,
    capacity: Number,
    buildingNumber: Number,
    advanceRequired: Boolean,
    workingTime: [{
            day: String,
            open: Number,
            close: String,
        }],
    expectedPricePerTonneHr: Number,
    wareHouseHistory: [
        {
            load: {
                loadId: String,
            },
            startedAt: Date,
            endedAt: Date,
        },
    ],
    isBlocked: Boolean,
    isVerified: Boolean,
    createdAt: Date,
    expiresAt: Date,
    status: String,
    bids: [
        {
            userId: String,
            bidAmount: Number,
            bidStatus: String,
            bidTime: Date,
        },
    ],
});
module.exports = {
    wareHouseSchema: WareHouseSchema
};
