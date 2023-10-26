const { updateUseCase : wrappedFunctionToUpdate } = require('../../../domainLayer/useCase/index');

const updateCntrl = async (data:any) => {
  try {
    const {
      _id,
      wareHouseName,
      wareHouseType,
      wareHouseDetails,
      contactInfo: {
        phone,
        email,
      },
      location,
      locationPostalCode,
      ownerId,
      capacity,
      buildingNumber,
      advanceRequired: Boolean,
      workingTime: [{
        day,
        open,
        close,
      }],
      expectedPricePerTonneHr,
      wareHouseHistory: [
        {
          load: {
            loadId,
          },
          startedAt,
          endedAt,
        },
      ],
      expiresAt,
      status,
      bids: [
        {
          userId,
          bidAmount,
          bidStatus,
          bidTime,
        },
      ],
    } = data
    const newData = {
      _id,
      wareHouseName,
      wareHouseType,
      wareHouseDetails,
      contactInfo: {
        phone,
        email,
      },
      location,
      locationPostalCode,
      ownerId,
      capacity,
      buildingNumber,
      advanceRequired: Boolean,
      workingTime: [{
        day,
        open,
        close,
      }],
      expectedPricePerTonneHr,
      wareHouseHistory: [
        {
          load: {
            loadId,
          },
          startedAt,
          endedAt,
        },
      ],
      expiresAt,
      status,
      bids: [
        {
          userId,
          bidAmount,
          bidStatus,
          bidTime,
        },
      ],
    }
    const isUpdated = await wrappedFunctionToUpdate(newData);

    if (isUpdated)       
      return isUpdated;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    updateCntrl
};