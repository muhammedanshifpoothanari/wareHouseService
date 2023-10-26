import mongoose, { Model } from 'mongoose';

interface LoadHistory {
  load: {
    loadId: String;
  };
  startedAt: Date;
  endedAt: Date;
}

interface Bid {
  userId: String;
  bidAmount: Number;
  bidStatus: String;
  bidTime: Date;
}

interface WarehouseWeek {
  day: String;
  open: Number;
  close: String;
}
interface contact {
  phone: Number ,
  email: String,
}

interface wareHouseDocument {
  wareHouseName: String;
  wareHouseType: String;
  wareHouseDetails: String;
  location: String;
  locationPostalCode: Number;
  ownerId: String;
  capacity: Number;
  buildingNumber: Number;
  advanceRequired: Boolean;
  contactInfo: contact,
  workingTime: WarehouseWeek[];
  expectedPricePerTonneHr: Number;
  wareHouseHistory: LoadHistory[];
  isBlocked: Boolean;
  isVerified: Boolean;
  createdAt: Date;
  expiresAt: Date;
  status: String;
  bids: Bid[];
}



// Create a Mongoose model for the truck
const getWareHouseModel = (): Model<wareHouseDocument> => {
    const entityName = 'wareHouseInfo';
    const { wareHouseSchema } = require('../database/schema/wareHouse.schema');
    console.log('jhdhkjdxcfjkcfv');
    if (!wareHouseSchema)
        throw new Error('warehouse schema not found!');
    
    return mongoose.model<wareHouseDocument>(entityName, wareHouseSchema);
};
module.exports = {
    getWareHouseModel
}