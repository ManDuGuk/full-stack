const id = document.querySelector('#id');
const remove = () => {
    if (!id.value) {
        alert('삭제할 회원의id를 입력하세요');
        id.focus();
        return;
    }
    const url = `https://reqres.in/api/users/${id.value}`;
    console.log(url);
    fetch(url, {
        method: 'DELETE',
    })
        .then(response => {
            if (response.status === 204) {// 서버로부터 응답을 잘 받은 경우
                const result = document.querySelector('#result');
                result.innerHTML = `
            <h2>회원정보가 성공적으로 삭제되었습니다.</h2>
            `
            } else {
                throw new Error(`응답코드:${response.status}`);
            }
        })
        .catch(error => { alert(error) })
}