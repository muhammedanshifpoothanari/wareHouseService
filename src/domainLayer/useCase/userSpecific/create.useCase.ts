const { createWareHouseRepo: createWareHouseRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  wrapperTocreateWareHouse  = require('../utility');
type functionTypeToCreateWareHouse = (...args: any[]) => Promise<any>;
type dataAtCreateUseCase = {
  wareHouseName: string;
  wareHouseType: string;
  wareHouseDetails: string;
  location: string;
  locationPostalCode: number;
  ownerId: string;
  capacity: number;
  buildingNumber: number;
  advanceRequired: boolean;
  contactInfo: {
    phone: number ,
    email: string,
  };
  workingTime: [{
    day: string;
    open: number;
    close: string;
  }];
  expectedPricePerTonneHr: number;
}

const createWareHouseExecute: functionTypeToCreateWareHouse = async (dependency: typeof createWareHouseRepository,
   data: dataAtCreateUseCase) => {
  console.log('createLoadUseCase:', );
  console.log('dependency:', dependency);
  const warehouseData = await dependency(data);

  if (warehouseData === null) {
   return false
  }

  return warehouseData;
};

module.exports = wrapperTocreateWareHouse(createWareHouseRepository, createWareHouseExecute)

