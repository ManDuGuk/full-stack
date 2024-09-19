export interface ISquare{
    tag:'square'; //식별하기 위한 속성
    size:number;
}
export interface IRectangle{
    tag:'rectangle';
    width:number;
    height:number;
}
export interface ICircle{
    tag:'circle';
    radius:number;
}
export type IShape = ISquare | IRectangle |ICircle;