const { getWareHouseModel: modelToUpdateWareHouse } = require('../getWareHouseModel');

 type wareHouseDataToUpdate = {
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
};


// Define a function to update wareHouse information
const updateWareHouse = async (id: string, updatedWareHouseData: wareHouseDataToUpdate) => {
  console.log(id,updatedWareHouseData,'jhjgvfreer');
  
  if (!id || !updatedWareHouseData) {
    throw new Error('ID and updated user data must be provided!');
  }

  const wareHouseModel = modelToUpdateWareHouse();

  try {
    // Find the wareHouse by ID
    const wareHouse = await wareHouseModel.findById(id).exec();

    if (!wareHouse) {
      throw new Error('wareHouse not found in the database!');
    }

    // Update user fields based on the updatedWareHouseData object
    for (const key of Object.keys(updatedWareHouseData)) {
      wareHouse[key as keyof wareHouseDataToUpdate] = updatedWareHouseData[key as keyof wareHouseDataToUpdate];

    }

    // Save the updated user document
    const updatedWareHouse = await wareHouse.save();
    if(updatedWareHouse === null)
    return false;

    return true;
  } catch (error) {
    throw new Error(`Error in updating the wareHouse in the database: ${error}`);
  }
};

module.exports = {
  updateWareHouse,
};
