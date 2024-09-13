export interface TourItem{
    contentid:string;
    contenttypeid: number;
    title: string;
    addr1: string;
    addr2?: string;
    zipcode: string;
    tel?: string;
    firstimage: string;
    firstimage2: string;
}

export interface TourListResponse {
    response: {
      body: {
        items: {
          item: TourItem[];
        };
      };
    };
  }
  
  export interface TourDetailItem {
    infoname: string;
    infotext: string;
  }
  
  export interface TourDetailResponse {
    response: {
      body: {
        items: {
          item: TourDetailItem[];
        };
      };
    };
  }