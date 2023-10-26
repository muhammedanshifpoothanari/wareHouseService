const { getAllByWeightRepo: getAllByWeightRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByWeightWrapper  = require('../utility');
type functionToGetAllByWeightRepo = (...args: any[]) => Promise<any>;
const getAllByWeightExecute: functionToGetAllByWeightRepo = async (dependency: typeof getAllByWeightRepository, weight: number , sort: number = 1) => {
  console.log('getAllByWeightRepository:', );
  console.log('dependency:', dependency);
  const wareHouseData = await dependency(weight, sort);

  if (wareHouseData === null) {
   return false
  }

  return wareHouseData;
};

module.exports = getAllByWeightWrapper(getAllByWeightRepository, getAllByWeightExecute)

