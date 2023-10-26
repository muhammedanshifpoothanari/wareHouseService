const { getWareHouseModel : modelToGetWareHouseByStartingPointPostalCode } = require('../getWareHouseModel')
const getAllByLoacationPointPostal = async (postalCode: number) => {
    if (!postalCode)
        throw new Error('starting point was not properly passed to the repository!');

    const WareHouseModel = modelToGetWareHouseByStartingPointPostalCode();
    try {
        const WareHouseArray = await WareHouseModel.find({ postalCode: postalCode }).exec();
        if (!WareHouseArray || WareHouseArray.length === 0)
            return false;
        
        return WareHouseArray;
    } catch (error) {
        throw new Error('Error in getting WareHouse from the database by WareHouse startingpoint!');
    }
};

module.exports = {
    getAllByLoacationPointPostal
}