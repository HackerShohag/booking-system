"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.memberRouter = void 0;
const express_1 = __importDefault(require("express"));
const member_controller_1 = require("./member.controller");
const validationRequest_1 = __importDefault(require("../../middleware/validationRequest"));
const member_validation_1 = require("./member.validation");
const auth_1 = __importDefault(require("../../middleware/auth"));
const userRole_1 = require("../../utility/userRole");
const router = express_1.default.Router();
router.get('/get-buyer', (0, auth_1.default)(userRole_1.userRole.admin), (0, validationRequest_1.default)(member_validation_1.getValidationSchema), member_controller_1.memberController.getABuyer);
router.get('/get-buyers', (0, auth_1.default)(userRole_1.userRole.admin), member_controller_1.memberController.getAllBuyer);
router.get('/get-seller', (0, auth_1.default)(userRole_1.userRole.admin), (0, validationRequest_1.default)(member_validation_1.getValidationSchema), member_controller_1.memberController.getASeller);
router.get('/get-sellers', (0, auth_1.default)(userRole_1.userRole.admin), member_controller_1.memberController.getAllSeller);
router.get('/get-driver', (0, auth_1.default)(userRole_1.userRole.admin), (0, validationRequest_1.default)(member_validation_1.getValidationSchema), member_controller_1.memberController.getADriver);
router.get('/get-drivers', (0, auth_1.default)(userRole_1.userRole.admin), member_controller_1.memberController.getAllDriver);
router.get('/get-admin', (0, auth_1.default)(userRole_1.userRole.admin), (0, validationRequest_1.default)(member_validation_1.getValidationSchema), member_controller_1.memberController.getAAdmin);
router.get('/get-admins', (0, auth_1.default)(userRole_1.userRole.admin), member_controller_1.memberController.getAllAdmin);
router.put('/update-buyer/:id', (0, auth_1.default)(userRole_1.userRole.admin), (0, validationRequest_1.default)(member_validation_1.memberUpdateSchema), member_controller_1.memberController.updateBuyer);
router.put('/update-seller/:id', (0, auth_1.default)(userRole_1.userRole.admin), (0, validationRequest_1.default)(member_validation_1.memberUpdateSchema), member_controller_1.memberController.updateSeller);
router.put('/update-driver/:id', (0, auth_1.default)(userRole_1.userRole.admin), (0, validationRequest_1.default)(member_validation_1.memberUpdateSchema), member_controller_1.memberController.updateDriver);
router.put('/update-admin/:id', (0, auth_1.default)(userRole_1.userRole.admin), (0, validationRequest_1.default)(member_validation_1.memberUpdateSchema), member_controller_1.memberController.updateAdmin);
router.delete('/delete-buyer/:id', (0, auth_1.default)(userRole_1.userRole.admin), member_controller_1.memberController.deleteBuyer);
router.delete('/delete-seller/:id', (0, auth_1.default)(userRole_1.userRole.admin), member_controller_1.memberController.deleteSeller);
router.delete('/delete-driver/:id', (0, auth_1.default)(userRole_1.userRole.admin), member_controller_1.memberController.deleteDriver);
router.delete('/delete-admin/:id', (0, auth_1.default)(userRole_1.userRole.admin), member_controller_1.memberController.deleteAdmin);
exports.memberRouter = router;
