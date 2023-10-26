const {setCntrl: setController } = require('./userSpecific/create.controller');
const {updateCntrl: updateController } = require('./userSpecific/update.controller');

const {getAllCntrl: getAllController } = require('./common/getAll.controller');
const {getAllByBidderIdCntrl: getAllByBidderIdController } = require('./common/getAllByBidderId.controller');
const {getAllByNameCntrl: getAllByNameController } = require('./common/getAllByWareHouseName.controller');
const {getAllByTypeCntrl: getAllByTypeController } = require('./common/getAllByWareHouseType.controller');
const {getAllByOwnerIdCntrl: getAllByOwnerIdController } = require('./common/getAllByOwnerId.controller');
const {locationCntrl: locationController } = require('./common/getAllByLocation.controller');
const {getAllByLocationPostalUseCaseCntrl: getAllByLocationPostalController } = require('./common/getAllByLocationPostalCode.controller');
const {getAllByLoadIdCntrl: getAllByLoadIdController } = require('./common/getAllByLoadId.controller');
const {getAllByWeightCntrl: getAllByWeightController } = require('./common/getAllByWeight.controller');
const {getByWareHouseIdCntrl: getByWareHouseIdController } = require('./common/getById.controller');

const {blockByIdCntrl: blockByIdController } = require('./adminSpecific/block.controller');
const {unBlockByIdCntrl: unBlockByIdController } = require('./adminSpecific/unBlock.controller');
const {unVerifyByIdCntrl: unVerifyByIdController } = require('./adminSpecific/unVerify.controller');
const {verifyByIdCntrl: verifyByIdController } = require('./adminSpecific/verify.controller');

module.exports = {
    setController,
    updateController,
    getAllController,
    getAllByBidderIdController,
    getAllByNameController,
    getAllByTypeController,
    getAllByOwnerIdController,
    locationController,
    getAllByLocationPostalController,
    getAllByLoadIdController,
    getAllByWeightController,
    getByWareHouseIdController,
    blockByIdController,
    unBlockByIdController,
    unVerifyByIdController,
    verifyByIdController
}