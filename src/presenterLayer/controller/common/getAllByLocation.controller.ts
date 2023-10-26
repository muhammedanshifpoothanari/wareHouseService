import { Request, Response } from 'express';
const { getAllByLocationUseCase : wrappedFunction } = require('../../../domainLayer/useCase/index');

const locationCntrl = async (req: Request, res: Response) => {
  try {
    console.log(locationCntrl,'hdhdhhdhd');
    const location: string =req.body.location;

    const wareHouse = await wrappedFunction(location);
    console.log(wareHouse,'hdhdhhdhd');
    if (wareHouse) 
      return wareHouse
  return false
  } catch (error) {
    console.log(error);
  }
};


module.exports = {
    locationCntrl
};