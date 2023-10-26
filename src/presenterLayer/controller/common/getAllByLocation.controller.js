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
Object.defineProperty(exports, "__esModule", { value: true });
const { getAllByLocationUseCase: wrappedFunction } = require('../../../domainLayer/useCase/index');
const locationCntrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log(locationCntrl, 'hdhdhhdhd');
        const location = req.body.location;
        const wareHouse = yield wrappedFunction(location);
        console.log(wareHouse, 'hdhdhhdhd');
        if (wareHouse)
            return wareHouse;
        return false;
    }
    catch (error) {
        console.log(error);
    }
});
module.exports = {
    locationCntrl
};
