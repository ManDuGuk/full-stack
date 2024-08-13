
//windos 생략가능 아래 두개 문법은 같은것
let string = new String("1111")
string = new window.String("1111")

//대표적인 프로퍼티
console.log(innerWidth);
console.log(innerHeight);

//대표적인 메소드(전역 함수)
// open();
// close();

// alert("야호~")
// const result = confirm('밥먹었어?');
// console.log(result);

// const input = prompt("구구단 몇단?", 2);
// // console.log(age);

// printGu(parseInt(input));

// const pop = open("https:www.naver.com", "pop");
// console.log(pop);
// if (!pop) {
//     alert("팝업차단해주세요")
// }
// pop.close();

//sweetAlet 라이브러리 사용하기
Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
}).then((result) => {
    if (result.isConfirmed) {
        Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
        });
    }
});


