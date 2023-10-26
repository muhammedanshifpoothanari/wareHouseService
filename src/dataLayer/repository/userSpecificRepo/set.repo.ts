const { getWareHouseModel: modelToCreateWareHouse } = require('../getWareHouseModel');
  


interface warehouseWeek {
  day: string;
  open: number;
  close: string;
}
interface contact {
  phone: number ,
  email: string,
}

interface wareHouseDocument {
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
  workingTime: warehouseWeek[];
  expectedPricePerTonneHr: number;
}

  
const createWareHouse = async (wareHouseData: wareHouseDocument) => {
  if (!wareHouseData) {
    throw new Error('wareHouseData was not properly passed to the repository!');
  }

  const wareHouseModel = modelToCreateWareHouse();

  try {
    const newWareHouse = new wareHouseModel({
        ...wareHouseData,
        isBlocked: false,
        isVerified: false,
        status: 'active',
        createdAt : new Date(),
        expiresAt: new Date(),
    });

    // Save the new truck to the database
    const doneTheJob = await newWareHouse.save();
    if(!doneTheJob)
    return false;
    // Return the newly created wareHouse
    return true;
  } catch (error) {
    throw new Error(`Error in creating the wareHouse in the database: ${error}`);
  }
};

module.exports = {
  createWareHouse,
};
