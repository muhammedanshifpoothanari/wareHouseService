const { verifyWareHouseByIdRepo: verifyWareHouseByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const verifyWareHouseByIdRepoWrapper  = require('../utility');
type functionToVerifyWareHouseByIdRepo = (...args: any[]) => Promise<any>;
const verifyWareHouseByIdRepoExecute: functionToVerifyWareHouseByIdRepo = async (dependency: typeof verifyWareHouseByIdRepository, id: string) => {
  console.log('verifyWareHouseByIdRepository:', );
  console.log('dependency:', dependency);
  const warehouseData = await dependency(id);

  if (warehouseData === null) {
   return false
  }

  return warehouseData;
};

module.exports = verifyWareHouseByIdRepoWrapper(verifyWareHouseByIdRepository, verifyWareHouseByIdRepoExecute)
