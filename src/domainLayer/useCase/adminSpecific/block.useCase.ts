const { blockWareHouseByIdRepo: blockWareHouseByIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const blockWareHouseByIdWrapper  = require('../utility');
type functionToBlockWareHouseByIdRepo = (...args: any[]) => Promise<any>;
const blockWareHouseByIdExecute: functionToBlockWareHouseByIdRepo = async (dependency: typeof blockWareHouseByIdRepository, id: string) => {
  console.log('blockWareHouseByIdRepository:', );
  console.log('dependency:', dependency);
  const warehouseData = await dependency(id);

  if (warehouseData === null) {
   return false
  }

  return warehouseData;
};

module.exports = blockWareHouseByIdWrapper(blockWareHouseByIdRepository, blockWareHouseByIdExecute)

