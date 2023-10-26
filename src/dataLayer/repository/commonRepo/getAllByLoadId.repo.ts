const { getWareHouseModel : modelToGetLoadWareHouseId } = require('../getWareHouseModel')
const getAllByLoadId = async (loadId: string) => {
    if (!loadId)
        throw new Error('load id was not properly passed to the repository!');

    const wareHouseModel = modelToGetLoadWareHouseId();
    try {
        const wareHouseArray = await wareHouseModel.find({
            'wareHouseHistory.load.loadId' :loadId
          }).exec();
          
        if (!wareHouseArray || wareHouseArray.length === 0)
            return false;
        
        return wareHouseArray;
    } catch (error) {
        throw new Error('Error in getting wareHouse from the database by load id!');
    }
};

module.exports = {
    getAllByLoadId
}