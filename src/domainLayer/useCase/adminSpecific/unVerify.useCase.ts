const { unVerifyWareHouseByIdRepo: unVerifyWareHouseByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const unVerifyWareHouseByIdRepoWrapper  = require('../utility');
type functionToUnVerifyWareHouseByIdRepo = (...args: any[]) => Promise<any>;
const unVerifyWareHouseByIdRepoExecute: functionToUnVerifyWareHouseByIdRepo = async (dependency: typeof unVerifyWareHouseByIdRepository, id: string) => {
  console.log('unVerifyWareHouseByIdRepository:', );
  console.log('dependency:', dependency);
  const warehouseData = await dependency(id);

  if (warehouseData === null) {
   return false
  }

  return warehouseData;
};

module.exports = unVerifyWareHouseByIdRepoWrapper(unVerifyWareHouseByIdRepository, unVerifyWareHouseByIdRepoExecute)
