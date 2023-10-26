"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { getAllByWeightRepo: getAllByWeightRepository } = require('../../../dataLayer/repository/index'); // Import your dependency
const getAllByWeightWrapper = require('../utility');
const getAllByWeightExecute = (dependency, weight, sort = 1) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('getAllByWeightRepository:');
    console.log('dependency:', dependency);
    const wareHouseData = yield dependency(weight, sort);
    if (wareHouseData === null) {
        return false;
    }
    return wareHouseData;
});
module.exports = getAllByWeightWrapper(getAllByWeightRepository, getAllByWeightExecute);
