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
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
let baseUrl = process.env.URL;
const API_KEY = process.env.API_KEY;
//get /api/toures/area?areaCode=1
const router = (0, express_1.Router)();
router.get('/area', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    let areaCode = req.query.areaCode;
    if (!areaCode) {
        areaCode = "1"; //서울:1,인천:2,대전:3,
    }
    if (!API_KEY) {
        return res.status(401).json({ message: '인증받지 못한 서비스 키입니다.' });
    }
    // http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=YssH2yHSdTKhkaaYIJFFKZEP%2BkykGa%2Bgb10wi4F5hZ%2BaTmuQvsdhy3uhSaRFNpvoaEG%2FVZvBmhaHJao7zf7gvA%3D%3D&areaCode=1&MobileOS=ETC&MobileApp=TourApiApp&_type=json&numOfRows=20&pageNo=1
    const url = `${baseUrl}/areaBasedList1?serviceKey=${API_KEY}&areaCode=1&MobileOS=ETC&MobileApp=TourApiApp&_type=json&numOfRows=20&pageNo=1`;
    console.log(url);
    try {
        const response = yield axios_1.default.get(url);
        const data = response.data;
        if (!((_c = (_b = (_a = data.response) === null || _a === void 0 ? void 0 : _a.body) === null || _b === void 0 ? void 0 : _b.items) === null || _c === void 0 ? void 0 : _c.item)) {
            return res.status(404).json({ message: "해당 정보가 없습니다." });
        }
        res.json(data.response.body.items.item);
    }
    catch (error) {
        res.status(500).json({ messag: '데이터 받아오기 실패' + error.message });
    }
}));
exports.default = router;
