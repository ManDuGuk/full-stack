import { Router, Request, Response } from 'express'; 
import axios from 'axios';
import { TourListResponse, TourDetailResponse, TourItem } from '../interfaces/TourApi';
import dotenv from 'dotenv';
dotenv.config()
const router=Router();
const baseUrl = `http://apis.data.go.kr/B551011/KorService1`;
const API_KEY = process.env.API_KEY as string;
//GET /api/tours/area?areaCode=1 
// 관광 정보 가져오기
router.get('/area', async (req: Request, res: Response) => {
  let areaCode = req.query.areaCode as string;
 
  if(!API_KEY){
   return  res.status(401).json({message:'인증받지 못한 API KEY입니다'})
  }
  if(!areaCode){
    areaCode="1";
  }

  const url = `${baseUrl}/areaBasedList1?serviceKey=${API_KEY}&areaCode=${areaCode}&contentTypeId=12&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TourAPIApp&_type=json`;
//   console.log(url);
  
  try {
    const response = await axios.get<TourListResponse>(url);
    
    const data = response.data;
    console.log('data: ',data)
    if (!data.response?.body?.items?.item) {
      return res.status(404).json({ message: '검색 결과가 없습니다.' });
    }

    res.json(data.response.body.items.item);
  } catch (error) {
    res.status(500).json({ message: '데이터를 불러오는 데 실패했습니다.' });
  }
});

// 관광 상세 정보 가져오기
router.get('/detail', async (req: Request, res: Response) => {
  const { contentId, contentTypeId } = req.query;

  const url = `${baseUrl}/detailInfo1?serviceKey=${API_KEY}&contentId=${contentId}&contentTypeId=${contentTypeId}&MobileOS=ETC&MobileApp=TourAPIApp&_type=json`;
  
  try {
    const response = await axios.get<TourDetailResponse>(url);
    const data = response.data;

    if (!data.response?.body?.items?.item) {
      return res.status(404).json({ message: '상세 정보가 없습니다.' });
    }

    res.json(data.response.body.items.item);
  } catch (error) {
    res.status(500).json({ message: '상세 정보를 불러오는 데 실패했습니다.' });
  }
});

export default router;