import { Router, Request, Response, NextFunction } from 'express';
const {getAllController: getAllAtAdmin } = require('../../controller/index');
const {getAllByBidderIdController: getAllByBidderIdAtAdmin } = require('../../controller/index');
const {getAllByNameController: getAllByNameAtAdmin } = require('../../controller/index');
const {getAllByTypeController: getAllByTypeAtAdmin} = require('../../controller/index');
const {getAllByOwnerIdController: getAllByOwnerIdAtAdmin} = require('../../controller/index');
const {locationController: locationAtAdmin} = require('../../controller/index');
const {getAllByLocationPostalController: getAllByLocationPostalAtAdmin} = require('../../controller/index');
const {getAllByLoadIdController: getAllByLoadIdAtAdmin} = require('../../controller/index');
const {getAllByWareHouseIdController: getAllByWareHouseIdAtAdmin} = require('../../controller/index');
const {getAllByWeightController: getAllByWeightAtAdmin} = require('../../controller/index');
const {getByWareHouseIdController: getByWareHouseIdAtAdmin} = require('../../controller/index');
const {blockByIdController: blockByIdAtAdmin} = require('../../controller/index');
const {unBlockByIdController: unBlockByIdAtAdmin} = require('../../controller/index');
const {unVerifyByIdController: unVerifyByIdAtAdmin} = require('../../controller/index');
const {verifyByIdController: verifyByIdAtAdmin} = require('../../controller/index');
const adminRouters = Router();

interface RouteHandler {
  (req: Request, res: Response, next: NextFunction): Promise<void>;
}

const asyncErrorHandler = (fn: RouteHandler) => async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result: any = await fn(req, res,next );
    if (!result) {
      return res.status(404).json({ error: 'Data not found!' });
    }
    res.status(200).json({ message: 'Success', data: result });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred while processing the request. Please try again later.' });
  }
};

const routes = [
  { path: '/wareHouse', method: 'GET', fn: getAllAtAdmin },
  { path: '/wareHouse/byBidder/:id', method: 'GET', fn: getAllByBidderIdAtAdmin },
  { path: '/wareHouse/byName', method: 'POST', fn: getAllByNameAtAdmin },
  { path: '/wareHouse/byType', method: 'POST', fn: getAllByTypeAtAdmin },
  { path: '/wareHouse/Owner/:id', method: 'GET', fn: getAllByOwnerIdAtAdmin },
  { path: '/wareHouse/byLocation', method: 'POST', fn: locationAtAdmin },
  { path: '/wareHouse/ByLocationPostal', method: 'POST', fn: getAllByLocationPostalAtAdmin },
  { path: '/wareHouse/ByLoad/:id', method: 'GET', fn: getAllByLoadIdAtAdmin },
  { path: '/wareHouse/ByWareHouse/:id', method: 'GET', fn: getAllByWareHouseIdAtAdmin },
  { path: '/wareHouse/ByWeight', method: 'POST', fn: getAllByWeightAtAdmin },
  { path: '/users/ByWareHouse', method: 'POST', fn: getByWareHouseIdAtAdmin },
  
    { path: '/users/block', method: 'POST', fn: blockByIdAtAdmin },
    { path: '/users/unblock', method: 'POST', fn: unBlockByIdAtAdmin },
    { path: '/users/unVerify', method: 'POST', fn: unVerifyByIdAtAdmin },
    { path: '/users/verify', method: 'POST', fn: verifyByIdAtAdmin },
  ];
  

for (const route of routes) {
  const { path, fn } = route;
  const routeHandler = asyncErrorHandler(fn);

  if (route.method === 'GET') {
    adminRouters.get(path, routeHandler);
  } else if (route.method === 'POST') {
    adminRouters.post(path, routeHandler);
  } else if (route.method === 'DELETE') {
    adminRouters.delete(path, routeHandler);
  } else if (route.method === 'PATCH') {
    adminRouters.patch(path, routeHandler);
  } else if (route.method === 'PUT') {
    adminRouters.put(path, routeHandler);
  }
}

module.exports = adminRouters
