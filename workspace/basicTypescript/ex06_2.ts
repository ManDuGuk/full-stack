import {ResultType}from './util';

export const ajaxWork = ():ResultType=>{
    try{
        console.log('ajaxwork... ajax통신중...');
        throw new Error('error:네트워크 통신 에러');
    }catch(err:any){
        return [false,(err as Error).message];
    }
}

let result =ajaxWork();
console.log(result);


//튜플에서 비구조화 할당 적용가능
const [isSuccess,msg]= ajaxWork();
console.log(`isSuccess: ${isSuccess}`);
console.log(`msg:${msg}`);

