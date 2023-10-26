import mongoose, { Document, Schema } from 'mongoose';

interface LoadHistory {
  load: {
    loadId: string;
  };
  startedAt: Date;
  endedAt: Date;
}

interface Bid {
  userId: string;
  bidAmount: number;
  bidStatus: string;
  bidTime: Date;
}

interface WarehouseWeek {
  day: string;
  open: number;
  close: string;
}
interface contact {
  phone: number ,
  email: string,
}

interface wareHouseDocument extends Document {
  wareHouseName: string;
  wareHouseType: string;
  wareHouseDetails: string;
  location: string;
  locationPostalCode: number;
  ownerId: string;
  capacity: number;
  buildingNumber: number;
  advanceRequired: boolean;
  contactInfo: contact,
  workingTime: WarehouseWeek[];
  expectedPricePerTonneHr: number;
  wareHouseHistory: LoadHistory[];
  isBlocked: boolean;
  isVerified: boolean;
  createdAt: Date;
  expiresAt: Date;
  status: string;
  bids: Bid[];
}

const WareHouseSchema = new Schema<wareHouseDocument>({
  wareHouseName: String,
  wareHouseType: String,
  wareHouseDetails: String,
  contactInfo: {
    phone:  String,
    email:  String,
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
