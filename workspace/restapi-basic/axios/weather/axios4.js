const getCurrentLocation = () => {
    if (navigator.geolocation) { //옛날 브라우저는 지원이 안될수 있음
        //콜백 두개 처리함
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longtitude = position.coords.longitude;


            if (latitude && longtitude) {
                //여기서 id가 result인 곳에서 위도 경도 출력
                console.log(latitude, longtitude);
                document.querySelector('#result').innerHTML = `<h2>위도:${latitude}, 경도:${longtitude}</h2>`;
            } else {
                showError("위치 자료값이 이상함");
            }
        },

            (error) => {
                showError("위치 자료값을 불러올수 없음");
            }

        );
    } else {
        showError("브라우저에서 지원하지 않음");
    }
}
const showError = (message) => {
    alert(message);
}
