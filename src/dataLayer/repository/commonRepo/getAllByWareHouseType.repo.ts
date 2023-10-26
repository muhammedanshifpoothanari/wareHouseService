const { getWareHouseModel : modelToGetWareHouseByType } = require('../getWareHouseModel')
const getAllByWareHouseType = async (wareHouseType: string) => {
    if (!wareHouseType)
        throw new Error('WareHouse type was not properly passed to the repository!');

    const WareHouseModel = modelToGetWareHouseByType();
    try {
        const wareHouseArray = await WareHouseModel.find({ wareHouseType: wareHouseType }).exec();
        if (!wareHouseArray || wareHouseArray.length === 0)
            return false;
        
        return wareHouseArray;
    } catch (error) {
        throw new Error('Error in getting wareHouse from the database by wareHouse type!');
    }
};

module.exports = {
    getAllByWareHouseType
}