const { getByWareHouseIdRepo: getByWareHouseIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getByWareHouseIdWrapper  = require('../utility');
type functionToGetByWareHouseIdRepo = (...args: any[]) => Promise<any>;
const getByTruckIdExecute: functionToGetByWareHouseIdRepo = async (dependency: typeof getByWareHouseIdRepository, id: string) => {
  console.log('getByWareHouseIdRepository:', );
  console.log('dependency:', dependency);
  const warehouseData = await dependency(id);

  if (warehouseData === null) {
   return false
  }

  return warehouseData;
};

module.exports = getByWareHouseIdWrapper(getByWareHouseIdRepository, getByTruckIdExecute)

