const { getWareHouseModel : modelToGetWareHouseBidderId } = require('../getWareHouseModel')
const getAllByBidderId = async (bidderId: string) => {
    if (!bidderId)
        throw new Error('WareHouse user id was not properly passed to the repository!');

    const wareHouseModel = modelToGetWareHouseBidderId();
    try {
        const wareHouseArray = await wareHouseModel.find({
            'bids.userId': bidderId
          }).exec();
          
        if (!wareHouseArray || wareHouseArray.length === 0)
            return false;
        
        return wareHouseArray;
    } catch (error) {
        throw new Error('Error in getting wareHouse from the database by user id!');
    }
};

module.exports = {
    getAllByBidderId
}