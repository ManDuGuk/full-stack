import {IShape, ISquare,IRectangle, ICircle } from './ex07_3';

export const getArea=(args:IShape):number=>{
    let area:number=0;
    switch(args.tag){ 
        case 'square': area=args.size*args.size;
            return area;
        case 'rectangle': area=args.width*args.height;
            return area;
        case 'circle': area=args.radius*args.radius *Math.PI;
            return area;
        default: area=0;
    }
    return area;
}//------------------------

const sq:ISquare={tag:'square', size:10};
const rt:IRectangle={tag:'rectangle',width:10, height:15}
const cr:ICircle={tag:'circle', radius:10}

//getArea()호출해보기
console.log(getArea(sq));//100
console.log(getArea(rt));//150
console.log(getArea(cr).toFixed(2));//314.16
