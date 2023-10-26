const { getWareHouseModel : modelToGetWareHouseByName } = require('../getWareHouseModel')
const getAllByWareHouseName = async (wareHouseName: string) => {
    if (!wareHouseName)
        throw new Error('WareHouse name was not properly passed to the repository!');

    const wareHouseModel = modelToGetWareHouseByName();
    try {
        const wareHouseArray = await wareHouseModel.find({ wareHouseName: wareHouseName }).exec();
        if (!wareHouseArray || wareHouseArray.length === 0)
            return false;
        
        return wareHouseArray;
    } catch (error) {
        throw new Error('Error in getting WareHouse from the database by wareHouse name!');
    }
};

module.exports = {
    getAllByWareHouseName
}