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
const member_model_1 = require("../Member/member.model");
const generateId = (identity) => __awaiter(void 0, void 0, void 0, function* () {
    let realId = '';
    if (identity === 'customer') {
        const count = yield member_model_1.customerModel.find({});
        const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
        realId = `C-${currentId}`;
    }
    else if (identity === 'operator') {
        const count = yield member_model_1.operatorModel.find({});
        const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
        realId = `O-${currentId}`;
    }
    else if (identity === 'driver') {
        const count = yield member_model_1.driverModel.find({});
        const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
        realId = `D-${currentId}`;
    }
    else if (identity === 'admin') {
        const count = yield member_model_1.adminModel.find({});
        const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
        realId = `A-${currentId}`;
    }
    else if (identity === 'moderator') {
        const count = yield member_model_1.moderatorModel.find({});
        const currentId = (Number(count.length) + 1).toString().padStart(4, '0');
        realId = `M-${currentId}`;
    }
    return realId;
});
exports.default = generateId;
