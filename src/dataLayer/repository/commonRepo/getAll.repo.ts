const { getWareHouseModel } = require('../getWareHouseModel');

const getAll = async () => {
    const wareHouseModel = getWareHouseModel();
    try {
        console.log('getAllRepo');
        
        const wareHouseArray = await wareHouseModel.find().exec();
        
        if (wareHouseArray.length === 0 || !wareHouseArray )
            return false;
        return wareHouseArray;
    } catch (error) {
        throw new Error('Error in getting wareHouse from the database!');
    }
};

module.exports = {
    getAll
}
