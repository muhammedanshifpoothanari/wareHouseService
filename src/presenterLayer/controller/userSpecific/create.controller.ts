const { createUseCase : wrappedFunctionToSet } = require('../../../domainLayer/useCase/index');

const setCntrl = async (data:any) => {
  try {
    const {
      wareHouseName,
      wareHouseType,
      wareHouseDetails,
      location,
      locationPostalCode,
      ownerId,
      capacity,
      buildingNumber,
      advanceRequired,
      contactInfo: {
        phone,
        email,
      },
      workingTime: [{
        day,
        open,
        close,
      }],
      expectedPricePerTonneHr,
    } = data
    const newData = {
      wareHouseName,
      wareHouseType,
      wareHouseDetails,
      location,
      locationPostalCode,
      ownerId,
      capacity,
      buildingNumber,
      advanceRequired,
      contactInfo: {
        phone,
        email,
      },
      workingTime: [{
        day,
        open,
        close,
      }],
      expectedPricePerTonneHr,
    }
    const isCreated = await wrappedFunctionToSet(newData);

    if (isCreated) 
      return isCreated;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    setCntrl
};