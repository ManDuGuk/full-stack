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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const axios_1 = __importDefault(require("axios"));
const router = (0, express_1.Router)();
const baseUrl = `http://apis.data.go.kr/B551011/KorService1`;
const API_KEY = process.env.API_KEY;
// 관광 정보 가져오기
router.get('/area', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const areaCode = req.query.areaCode;
    const url = `${baseUrl}/areaBasedList1?serviceKey=${API_KEY}&areaCode=${areaCode}&contentTypeId=12&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TourAPIApp&_type=json`;
    try {
        const response = yield axios_1.default.get(url);
        const data = response.data;
        if (!((_c = (_b = (_a = data.response) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.item)) {
            return res.status(404).json({ message: '검색 결과가 없습니다.' });
        }
        res.json(data.response.body.items.item);
    }
    catch (error) {
        res.status(500).json({ message: '데이터를 불러오는 데 실패했습니다.' });
    }
}));
// 관광 상세 정보 가져오기
router.get('/detail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    const { contentId, contentTypeId } = req.query;
    const url = `${baseUrl}/detailInfo1?serviceKey=${API_KEY}&contentId=${contentId}&contentTypeId=${contentTypeId}&MobileOS=ETC&MobileApp=TourAPIApp&_type=json`;
    try {
        const response = yield axios_1.default.get(url);
        const data = response.data;
        if (!((_c = (_b = (_a = data.response) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.item)) {
            return res.status(404).json({ message: '상세 정보가 없습니다.' });
        }
        res.json(data.response.body.items.item);
    }
    catch (error) {
        res.status(500).json({ message: '상세 정보를 불러오는 데 실패했습니다.' });
    }
}));
exports.default = router;
