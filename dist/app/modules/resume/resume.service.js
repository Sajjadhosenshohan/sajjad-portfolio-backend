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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResumeServices = void 0;
const prisma_1 = __importDefault(require("../../shared/prisma"));
const addResumeIntoDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.resume.create({
        data: payload,
    });
    return result;
});
const getAllResumeDataFromDB = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield prisma_1.default.resume.findMany();
    return result;
});
const deleteResumeFromDB = (id) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(id);
    yield prisma_1.default.resume.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const result = yield prisma_1.default.resume.delete({
        where: {
            id,
        }
    });
    return result;
});
const updateResumeFromDB = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = payload, rest = __rest(payload, ["id"]);
    yield prisma_1.default.resume.findUniqueOrThrow({
        where: {
            id,
        },
    });
    const result = yield prisma_1.default.resume.update({
        where: {
            id,
        },
        data: rest,
    });
    return result;
});
exports.ResumeServices = {
    addResumeIntoDB,
    getAllResumeDataFromDB,
    deleteResumeFromDB,
    updateResumeFromDB
};
