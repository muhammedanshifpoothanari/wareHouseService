import { Request, Response } from 'express';
const { getAllByLocationPostalUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const getAllByLocationPostalUseCaseCntrl = async (req: Request, res: Response) => {
  try {
    console.log(getAllByLocationPostalUseCaseCntrl,'hdhdhhdhd');
    const locationPostalCode: number =req.body.locationPostalCode;

    const wareHouse = await wrappedFunction(locationPostalCode);
    console.log(wareHouse,'hdhdhhdhd');
    if (wareHouse) 
      return wareHouse;
  return false;
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    getAllByLocationPostalUseCaseCntrl
};