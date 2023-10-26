const { getAllUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllCntrl = async () => {
  try {
    console.log('getAllCntrl','hdhdhhdhd');
    const wareHouse = await wrappedFunction();
    console.log('hdhdhhdhd',wareHouse,'hdhdhhdhd');
    
  if (wareHouse && wareHouse !== undefined) 
    return wareHouse
    
  return false;

  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllCntrl
};
