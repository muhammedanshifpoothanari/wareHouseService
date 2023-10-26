const { getWareHouseModel : modelToGetWareHouseByStartingPoint } = require('../getWareHouseModel')
const getAllByStartingPoint = async (startingPoint: string) => {
    if (!startingPoint)
        throw new Error('starting point was not properly passed to the repository!');

    const wareHouseModel = modelToGetWareHouseByStartingPoint();
    try {
        const wareHouseArray = await wareHouseModel.find({ startingPoint: startingPoint }).exec();
        if (!wareHouseArray || wareHouseArray.length === 0)
            return false;

        return wareHouseArray;
    } catch (error) {
        throw new Error('Error in getting WareHouse from the database by wareHouse startingpoint!');
    }
};

module.exports = {
    getAllByStartingPoint
}