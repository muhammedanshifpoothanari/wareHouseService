const { getAllByWareHouseNameRepo: getAllByWareHouseNameRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByWareHouseNameWrapper  = require('../utility');
type functionTypeToGetAllByName = (...args: any[]) => Promise<any>;
const getAllByNameExecute: functionTypeToGetAllByName = async (dependency: typeof getAllByWareHouseNameRepository,warehouseName: string) => {
  console.log('getAllByWareHouseNameRepository:', );
  console.log('dependency:', dependency);
  const warehouseData = await dependency(warehouseName);

  if (warehouseData === null) {
    return false
  }

  return warehouseData;
};

module.exports = getAllByWareHouseNameWrapper(getAllByWareHouseNameRepository, getAllByNameExecute)

