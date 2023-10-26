const { getAllByBidderIdRepo: getAllByBidderIdRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByBidderWrapper  = require('../utility');
type functionToGetAllWareHouseByBidderId = (...args: any[]) => Promise<any>;
const getAllByBidderIdExecute: functionToGetAllWareHouseByBidderId = async (dependency: typeof getAllByBidderIdRepository, id: string) => {
  console.log('getAllByBidderIdRepository:', );
  console.log('dependency:', dependency);
  const warehouseData = await dependency(id);

  if (warehouseData === null) {
   return false
  }

  return warehouseData;
};

module.exports = getAllByBidderWrapper(getAllByBidderIdRepository, getAllByBidderIdExecute)

