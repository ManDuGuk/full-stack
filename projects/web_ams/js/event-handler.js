export class EventHandler {
    constructor() {

    }
    eventRegist(callback) {

        document.querySelector("#addBtn").addEventListener("click", function () {

            // student 입력한 값들가져오기
            let sno = document.inputForm.sno.value;
            let sname = document.inputForm.sname.value;
            let kor = parseInt(document.inputForm.kor.value);
            let eng = parseInt(document.inputForm.eng.value);
            let math = parseInt(document.inputForm.math.value);

            callback({ sno, sname, kor, eng, math });
        });
    }

    readStudent(students) {
        const tbody = document.querySelector("tbody");
        // 전체 렌더링전에 한번 초기화
        tbody.innerHTML = "";

        // 전체 렌더링함수
        students.forEach(student => {


            const tr = document.createElement("tr")
            const numtd = document.createElement("td")
            numtd.textContent = student.num;
            tr.append(numtd);

            const nametd = document.createElement("td")
            nametd.textContent = student.name;
            tr.append(nametd);

            const kortd = document.createElement("td")
            kortd.textContent = student.kor;
            tr.append(kortd);

            const entd = document.createElement("td")
            entd.textContent = student.en;
            tr.append(entd);

            const mathtd = document.createElement("td")
            mathtd.textContent = student.math;
            tr.append(mathtd);

            const totaltd = document.createElement("td")
            totaltd.textContent = student.totalScore;
            tr.append(totaltd);

            const avgtd = document.createElement("td")
            avgtd.textContent = student.avgScore;
            tr.append(avgtd);

            const ranktd = document.createElement("td")
            ranktd.textContent = student.rank;
            tr.append(ranktd);

            tbody.append(tr);
        });
    }


    //스튜던트 객체들을 받아서 텍스트값으로 표시해주기
    displayStudentAll(students) {

        document.querySelector("#addBtn").addEventListener("click", () => {
            console.log("버튼클릭됨");
            // console.log(students); //빈값으로 들어오는걸 확인함
            console.log(students);

            this.readStudent(students);


        });
    }

    selectSort(studentRepository) {
        let selectbox = document.querySelector("#sortSelect")
        document.querySelector("#sortSelect").addEventListener("change", (e) => {

            let selectValue = selectbox.options[selectbox.selectedIndex].value;

            if (selectValue === "ssn") {

                studentRepository.numSort();
                this.readStudent(studentRepository.students);
            }
            else if (selectValue === "name") {
                studentRepository.nameSort();

                this.readStudent(studentRepository.students);
            } else {
                studentRepository.students.sort((a, b) => b.avgScore - a.avgScore);
                this.readStudent(studentRepository.students);
            }

        });
    }

    // 검색은 내일하기로..
    // filterSort() {
    //     let selectbox = document.querySelector(".form-select");
    //     document.querySelector(".form-select").addEventListener("change", (e) => {
    //         let selectValue = selectbox.options[selectbox.selectedIndex].value;

    //         if (selectValue === "ssn") {
    //             document.querySelectorAll("td").forEach(element => {
    //                 element.style.display = "block";
    //             });
    //             let resultList = document.querySelectorAll("td: nth - child(1)");

    //             //input값 받아오기
    //             let searchnum = document.querySelector(".form-control").value;
    //             // 노드 배열로 받아온다.
    //             resultList.forEach(element => {
    //                 let ssnValue = parseInt(element.querySelector("td").textContent)

    //                 if (ssnValue !== searchnum) {
    //                     element.style.display = "none";
    //                 }
    //             });
    //         } else (selectValue === "name") {
    //             document.querySelectorAll("td").forEach(element => {
    //                 element.style.display = "block";
    //             });

    //             let resultList = document.querySelectorAll("td: nth - child(2)");
    //             let searchnum = document.querySelector(".form-control").value;
    //             // 노드 배열로 받아온다.
    //             resultList.forEach(element => {
    //                 let ssnValue = parseInt(element.querySelector("td").textContent)

    //                 if (ssnValue === searchnum) {
    //                     element.style.display = "none";
    //                 }
    //             });
    //         };
    //     });
    // }

    searchEvent(fn) {
        document.querySelector("#searchBtn").addEventListener("click", (e) => {
            fn();
        });
    }
}
