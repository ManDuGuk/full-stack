//엔트리 포인트
import Reat from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//렌더링의 기준이될 박스를 찾고
const container = document.querySelector("#container");
//루트로 설정하고
const root = ReactDOM.createRoot(container);
//렌더링
root.render(<App />)