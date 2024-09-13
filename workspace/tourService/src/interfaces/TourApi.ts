export interface TourItem{
    contentid:string;
    contenttypeid:string;
    title:string;
    firstimage:string;
    firstimage2:string;
    zipcode:string;
    addr1:string;
    addr2?:string;
    tel?:string;
}

export interface TourListResponse{
    response:{
        body:{
            items:{
                item:TourItem[];
            }
        }
    }
}

export interface TourDetailItem{
    infoname:string;
    infotext:string;
}

export interface TourDetailResponse{
    response:{
        body:{
            items:{
                item:TourDetailItem[];
            }
        }ftg
    }
}