const getCurrentLocation = () => {
    if (navigator.geolocation) {
        //콜백 두개 처리함
        navigator.geolocation.getCurrentPosition((position) => {
            const latitude = position.coords.latitude;
            const longtitude = position.coords.longitude;


            if (latitude && longtitude) {
                //여기서 id가 result인 곳에서 위도 경도 출력
                console.log(latitude, longtitude);
                document.querySelector('#result').innerHTML = `위도:${latitude}, 경도:${longtitude}`;
            } else {
                showError("응 니 위치 조회안되");
            }
        },

            (error) => {
                showError("님 에러뜸");
            }

        );
    } else {
        showError("님 에러뜸");
    }
}
const showError = (message) => {
    alert(message);
}
