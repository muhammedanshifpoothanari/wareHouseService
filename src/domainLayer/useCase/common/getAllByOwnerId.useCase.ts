const { getAllByOwnerIdRepo: getAllByOwnerIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByOwnerIdWrapper  = require('../utility');
type functionToGetAllByOwnerIdRepo = (...args: any[]) => Promise<any>;
const getAllByOwnerIdExecute: functionToGetAllByOwnerIdRepo = async (dependency: typeof getAllByOwnerIdRepository, id: string) => {
  console.log('getAllByOwnerIdRepoRepository:', );
  console.log('dependency:', dependency);
  const warehouseData = await dependency(id);

  if (warehouseData === null) {
   return false
  }

  return warehouseData;
};

module.exports = getAllByOwnerIdWrapper(getAllByOwnerIdRepository, getAllByOwnerIdExecute)

