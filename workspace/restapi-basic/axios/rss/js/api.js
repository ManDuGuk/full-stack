import axios from 'https://cdn.skypack.dev/axios';

const getNews = async (urlProxy) => {
    try {
        //제이슨 객체로 반환됨(원래는 그냥 문자열이 리턴될텐데 자동으로 json화 해서 리턴되는 보낼때도 자동으로 제이슨화 해서 보내짐)
        const response = await axios.get(urlProxy, { params: { count: 15 } })

        JSON.stringify(response); //제이슨객체를 그냥 콘솔로 찍으면 object object라고 나온다. 제이슨 객체의 모습을 확인하고자 하면 문자열로 변환해서 확인해보면된다. 
        //확인해보니까 제이슨 안에 data프로퍼티 안에 또 객체들이 들어가 있다. 그래서 

        console.log(`response: ${JSON.stringify(response)}`);


        return response.data;
    } catch (error) {
        alert('proxy 호출중 에러' + error);
    }
}

export { getNews }