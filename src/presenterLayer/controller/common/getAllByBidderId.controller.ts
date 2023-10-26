import { Request, Response } from 'express';
const { getAllByBidderIdUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByBidderIdCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByBidderIdCntrl,'hdhdhhdhd');
    const id: string =req.params.id 
    const wareHouse = await wrappedFunction(id);
    console.log(wareHouse,'hdhdhhdhd');
    if (wareHouse) 
      return wareHouse;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByBidderIdCntrl
};