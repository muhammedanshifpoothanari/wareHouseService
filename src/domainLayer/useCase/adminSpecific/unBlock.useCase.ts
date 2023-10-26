const { unBlockWareHouseByIdRepo: unBlockWareHouseByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const unBlockWareHouseByIdRepoWrapper  = require('../utility');
type functionToUnBlockWareHouseByIdRepo = (...args: any[]) => Promise<any>;
const unBlockWareHouseByIdRepoExecute: functionToUnBlockWareHouseByIdRepo = async (dependency: typeof unBlockWareHouseByIdRepository, id: string) => {
  console.log('unBlockWareHouseByIdRepository:', );
  console.log('dependency:', dependency);
  const warehouseData = await dependency(id);

  if (warehouseData === null) {
   return false
  }

  return warehouseData;
};

module.exports = unBlockWareHouseByIdRepoWrapper(unBlockWareHouseByIdRepository, unBlockWareHouseByIdRepoExecute)
