const { getWareHouseModel : modelToGetWareHouseByOwnerId } = require('../getWareHouseModel')
const getAllByOwnerId = async (ownerId: string) => {
    if (!ownerId)
        throw new Error('load owner id was not properly passed to the repository!');

    const wareHouseModel = modelToGetWareHouseByOwnerId();
    try {
        const wareHouseArray = await wareHouseModel.find({ ownerId: ownerId }).exec();
        if (!wareHouseArray || wareHouseArray.length === 0)
            return false;
        
        return wareHouseArray;
    } catch (error) {
        throw new Error('Error in getting wareHouse from the database by owner id!');
    }
};

module.exports = {
    getAllByOwnerId
}