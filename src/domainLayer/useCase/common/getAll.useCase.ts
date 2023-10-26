const { getAllRepo: getAllRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllWrapper  = require('../utility');
type functionTypeToGetAllWareHouse = (...args: any[]) => Promise<any>;
const execute: functionTypeToGetAllWareHouse = async (dependency: typeof getAllRepository) => {
  console.log('getAllRepository:' );
  console.log('dependency:', dependency);
  
  const warehouseData = await dependency();
  console.log('jjjjjjj');
  
  console.log('dependency:', warehouseData);
  if (warehouseData === null) {
    return false
  }

  return warehouseData;
};

module.exports = getAllWrapper(getAllRepository, execute)

