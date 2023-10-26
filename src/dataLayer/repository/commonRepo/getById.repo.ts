const { getWareHouseModel : modelToGetWareHouseById } = require('../getWareHouseModel')
const getByWareHouseId = async (id: string) => {
    if (!id)
        throw new Error('wareHouse id was not properly passed to the repository!');

    const wareHouseModel = modelToGetWareHouseById();
    try {
        const wareHouseArray = await wareHouseModel.findById(id).exec();

        if (!wareHouseArray || wareHouseArray.length === 0)
            return false;
        
        return wareHouseArray;
    } catch (error) {
        throw new Error('Error in getting wareHouse from the database by wareHouse id!');
    }
};

module.exports = {
    getByWareHouseId
}