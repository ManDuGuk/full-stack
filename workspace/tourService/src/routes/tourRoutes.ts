import {Request,Response,Router} from 'express';
import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
import {TourListResponse,TourItem} from '../interfaces/TourApi';

let baseUrl = process.env.URL as string;
const API_KEY = process.env.API_KEY as string;

//get /api/toures/area?areaCode=1
const router = Router();

router.get('/area',async (req:Request,res:Response)=>{
    let areaCode = req.query.areaCode as string;
    if(!areaCode){
        areaCode="1" //서울:1,인천:2,대전:3,
    }
    if(!API_KEY){
        return res.status(401).json({message:'인증받지 못한 서비스 키입니다.'})
    }

    // http://apis.data.go.kr/B551011/KorService1/areaBasedList1?serviceKey=YssH2yHSdTKhkaaYIJFFKZEP%2BkykGa%2Bgb10wi4F5hZ%2BaTmuQvsdhy3uhSaRFNpvoaEG%2FVZvBmhaHJao7zf7gvA%3D%3D&areaCode=1&MobileOS=ETC&MobileApp=TourApiApp&_type=json&numOfRows=20&pageNo=1
    const url=`${baseUrl}/areaBasedList1?serviceKey=${API_KEY}&areaCode=1&MobileOS=ETC&MobileApp=TourApiApp&_type=json&numOfRows=20&pageNo=1`
    console.log(url);
    try {
        const response = await axios.get<TourListResponse>(url);
        const data= response.data;

        if(!data.response?.body?.items?.item){
            return res.status(404).json({message:"해당 정보가 없습니다."})
        }

        res.json(data.response.body.items.item);
    } catch (error:any) {
        res.status(500).json({messag:'데이터 받아오기 실패'+error.message})
    }
    
})

//관광 상세정보 가져오기
router.get('/detail',(req:Request,res:Response)=>{
    const{contentId,contentTypeId} =req.query
})

export default router;