const { getAllByLocationPostalRepo: getAllByLocationPostalRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByStartingPointPostalWrapper  = require('../utility');
type functionToGetAllByLocationPostalRepo = (...args: any[]) => Promise<any>;
const getAllByStartingPointPostalExecute: functionToGetAllByLocationPostalRepo = async (dependency: typeof getAllByLocationPostalRepository, locationPostalCode: number) => {
  console.log('getAllByLocationPostalRepository:', );
  console.log('dependency:', dependency);
  const warehouseData = await dependency(locationPostalCode);

  if (warehouseData === null) {
   return false
  }

  return warehouseData;
};

module.exports = getAllByStartingPointPostalWrapper(getAllByLocationPostalRepository, getAllByStartingPointPostalExecute)
