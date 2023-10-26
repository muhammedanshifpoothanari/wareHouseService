const { getWareHouseModel: modelToUnBlockWareHouseById } = require('../getWareHouseModel');

const unBlockWareHouseById = async (id: string): Promise<boolean> => {
  if (!id) {
    throw new Error('ID was not properly passed to the repository!');
  }
  console.log('reached block WareHouse');
  

  const WareHouseModel = modelToUnBlockWareHouseById();

  try {
    // Find the user with the specified ID
    const wareHouse = await WareHouseModel.findById(id).exec();

    if (!wareHouse) {
      // If no matching WareHouse is found, return false
      return false;
    }

    // Update the IsBlocked field to true
    wareHouse.isBlocked = false;
    await wareHouse.save();

    // WareHouse is blocked
    return true;
    
  } catch (error) {
    throw new Error('Error in un blocking the wareHouse by ID in the database!');
  }
};

module.exports = {
    unBlockWareHouseById 
};
