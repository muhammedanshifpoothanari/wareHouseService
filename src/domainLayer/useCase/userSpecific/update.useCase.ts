const { updateWareHousekRepo: updateWareHousekRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const  updateWrapperToupdateWareHouse  = require('../utility');
type functionToUpdateWareHouse = (...args: any[]) => Promise<any>;
type dataAtupdateWareHouseUseCase =  {
    _id: string,
    wareHouseName: String,
    wareHouseType: String,
    wareHouseDetails: String,
    contactInfo: {
      phone:  String,
      email:  String,
    },
    location: String,
    locationPostalCode: Number,
    ownerId: String,
    capacity: Number,
    buildingNumber: Number,
    advanceRequired: Boolean,
    workingTime: [{
      day: String,
      open: Number,
      close: String,
    }],
    expectedPricePerTonneHr: Number,
    wareHouseHistory: [
      {
        load: {
          loadId: String,
        },
        startedAt: Date,
        endedAt: Date,
      },
    ],
    expiresAt: Date,
    status: String,
    bids: [
      {
        userId: String,
        bidAmount: Number,
        bidStatus: String,
        bidTime: Date,
      },
    ],
  };
const updateWareHouseExecute: functionToUpdateWareHouse = async (dependency: typeof updateWrapperToupdateWareHouse,data: dataAtupdateWareHouseUseCase) => {
  console.log('updateWareHousekRepository:', );
  console.log('dependency:', dependency);
  const id: string = data._id
  console.log(data,'at usecase');
  
  const warehouseData = await dependency(id, data);

  if (warehouseData === null) {
   return false
  }

  return warehouseData;
};

module.exports = updateWrapperToupdateWareHouse(updateWareHousekRepository, updateWareHouseExecute)
