import { Request, Response } from 'express';
const { getAllByWareHouseTypeUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByTypeCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByTypeCntrl,'hdhdhhdhd');
    const type: string =req.body.wareHouseType 
    const wareHouse = await wrappedFunction(type);
    console.log(wareHouse,'hdhdhhdhd');
    if (wareHouse) 
      return wareHouse
  return false;
  } catch (error) {
    console.log(error);
    
  }
};


module.exports = {
    getAllByTypeCntrl
};