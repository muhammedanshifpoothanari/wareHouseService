const {blockWareHouseById: blockWareHouseByIdRepo } = require('./adminSpecifcRepo/block.repo');
const {unBlockWareHouseById: unBlockWareHouseByIdRepo } = require('./adminSpecifcRepo/unBlock.repo');
const {unVerifyWareHouseById: unVerifyWareHouseByIdRepo } = require('./adminSpecifcRepo/unVerify.repo');
const {verifyWareHouseById: verifyWareHouseByIdRepo } = require('./adminSpecifcRepo/verify.repo');

const { getAll: getAllRepo } = require('./commonRepo/getAll.repo');
const { getAllByBidderId: getAllByBidderIdRepo } = require('./commonRepo/getAllByBidderId.repo');
const { getAllByWareHouseName: getAllByWareHouseNameRepo } = require('./commonRepo/getAllByWareHouseName.repo');
const {getAllByWareHouseType: getAllByWareHouseTypeRepo } = require('./commonRepo/getAllByWareHouseType.repo');
const {getAllByOwnerId : getAllByOwnerIdRepo } = require('./commonRepo/getAllByOwnerId.repo');
const {getAllByLocation: getAllByLocationRepo } = require('./commonRepo/getAllByLocation.repo');
const {getAllByLocationPostal: getAllByLocationPostalRepo } = require('./commonRepo/getAllByLocationPostalCode.repo');
const {getAllByLoadId: getAllByLoadIdRepo } = require('./commonRepo/getAllByLoadId.repo');
const {getAllByWeight: getAllByWeightRepo } = require('./commonRepo/getAllByWeight.repo');
const {getByWareHouseId: getByWareHouseIdRepo } = require('./commonRepo/getById.repo');

const {createWareHouse: createWareHouseRepo } = require('./userSpecificRepo/set.repo');
const {updateWareHouse: updateWareHouseRepo } = require('./userSpecificRepo/update.repo');

module.exports = {
    blockWareHouseByIdRepo,
    unBlockWareHouseByIdRepo,
    unVerifyWareHouseByIdRepo,
    verifyWareHouseByIdRepo,
    getAllRepo,
    getAllByBidderIdRepo,
    getAllByWareHouseNameRepo,
    getAllByWareHouseTypeRepo,
    getAllByOwnerIdRepo,
    getAllByLocationRepo,
    getAllByLocationPostalRepo,
    getAllByLoadIdRepo,
    getAllByWeightRepo,
    getByWareHouseIdRepo,
    createWareHouseRepo,
    updateWareHouseRepo
}
