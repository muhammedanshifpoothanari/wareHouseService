const { getWareHouseModel : modelToGetWareHouseByWeight } = require('../getWareHouseModel')
const getAllByWeight = async (weight: number , sort: number = 1) => {
    if (!weight && sort)
        throw new Error('weight or sort was not properly passed to the repository!');

    const wareHouseModel = modelToGetWareHouseByWeight();
    try {
        let wareHouseArray: any;
        if(weight){
             wareHouseArray = await wareHouseModel.find({capacity: weight})
            .sort({ capacity: sort }) 
            .exec();
        }else{
             wareHouseArray = await wareHouseModel.find({})
            .sort({ weight: sort }) 
            .exec();
        }
          
        if (!wareHouseArray || wareHouseArray.length === 0)
            return false;
        
        return wareHouseArray;
    } catch (error) {
        throw new Error('Error in getting wareHouse from the database by weight!');
    }
};

module.exports = {
    getAllByWeight
}