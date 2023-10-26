import { Request, Response } from 'express';
const { getAllByWareHouseNameUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByNameCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByNameCntrl,'hdhdhhdhd');
    const wareHouseName: string =req.body.wareHouseName
    const wareHouse = await wrappedFunction(wareHouseName);
    console.log(wareHouse,'hdhdhhdhd');
    if (wareHouse) 
      return wareHouse
  return false
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByNameCntrl
};