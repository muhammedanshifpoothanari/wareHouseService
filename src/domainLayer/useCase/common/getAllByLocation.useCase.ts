const { getAllByLocationRepo: getAllByLocationRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByStartingPointWrapper  = require('../utility');
type functionToGetAllByLocationRepo = (...args: any[]) => Promise<any>;
const getAllByStartingPointExecute: functionToGetAllByOwnerIdRepo = async (dependency: typeof getAllByLocationRepository, location: string) => {
  console.log('getAllByLocationRepository:', );
  console.log('dependency:', dependency);
  const warehouseData = await dependency(location);

  if (warehouseData === null) {
   return false
  }

  return warehouseData;
};

module.exports = getAllByStartingPointWrapper(getAllByLocationRepository, getAllByStartingPointExecute)
