//대수데이터 타입
//[1] union 타입 ==> '|' 기호로 다양한 타입을 연결해서 만든 타입을 의미
//[2] intersect 타입==> '&'기호로 다양한 타입을 연결해서 만든 타입을 의미
//
type NumOrString = number|string;
let k:NumOrString = 10;
let z:NumOrString = "typeScript";

//z=true; //안됨