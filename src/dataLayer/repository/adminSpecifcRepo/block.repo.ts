const { getWareHouseModel: modelToBlockWareHouseById } = require('../getWareHouseModel');

const blockWareHouseById = async (id: string): Promise<boolean> => {
  if (!id) {
    throw new Error('ID was not properly passed to the repository!');
  }
  console.log('reached block WareHouse');
  

  const WareHouseModel = modelToBlockWareHouseById();

  try {
    // Find the user with the specified ID
    const wareHouse = await WareHouseModel.findById(id).exec();

    if (!wareHouse) {
      // If no matching  is found, return false
      return false;
    }

    // Update the IsBlocked field to true
    wareHouse.isBlocked = true;
    await wareHouse.save();

    // WareHouse is blocked
    return true;
    
  } catch (error) {
    throw new Error('Error in blocking the wareHouse by ID in the database!');
  }
};

module.exports = {
    blockWareHouseById 
};
