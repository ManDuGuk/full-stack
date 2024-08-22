export class EventHandler {
    constructor() {

    }
    eventRegist(callback) {

        //정규표현식 패턴
        const text = /[a-zA-Zㄱ-ㅎ가-힣]/;
        const numbers = /\b(0|[1-9][0-9]?|100)\b/;

        document.querySelector("#addBtn").addEventListener("click", function () {


            // student 입력한 값들가져오기
            let sno = parseInt(document.inputForm.sno.value);
            let sname = document.inputForm.sname.value;
            let kor = parseInt(document.inputForm.kor.value);
            let eng = parseInt(document.inputForm.eng.value);
            let math = parseInt(document.inputForm.math.value);

            if (!numbers.test(sno) || !text.test(sname) || !numbers.test(kor) || !numbers.test(eng) || !numbers.test(math)) {
                alert("다시 확인해보세요");
                return false;
            } else {
                callback({ sno, sname, kor, eng, math });
            }

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

    //버튼을 클릭함 이벤트 //원본 객체 배열을 전달 받는다.
    searchEvent(studentsArray) {

        //버튼클릭이벤트
        document.querySelector("#searchBtn").addEventListener("click", (e) => {

            //셀렉션 이벤트에 대한 값을 바로 가져와서 처리

            //셀렉션 값을 받아왔던
            let select = document.querySelector("#searchSelect");
            let value = select.options[select.selectedIndex].value;

            //인풋값 받아오고
            let inputValue = document.querySelector("#searchbar").value;

            let tempArray = [];

            if (!inputValue) {
                this.readStudent(studentsArray);
            } else {

                //검색값을 받아와서 리턴
                studentsArray.forEach(element => {
                    // nameArray = element.filter((inputname) => element.name === inputname)
                    // numArray = element.filter((inputnum) => element.num === inputname)

                    if ((value === "name" ? element.name : parseInt(element.num)) === inputValue) {


                        tempArray.push(element);
                    }




                });

                this.readStudent(tempArray);
            }
        });


    }

    deletStudent(studentRepository, callback) {
        const numbers = /\b(0|[1-9][0-9]?|100)\b/;

        document.querySelector("#delBtn").addEventListener("click", (e) => {
            let sno = parseInt(document.inputForm.sno.value);

            if (!numbers.test(sno)) {
                alert("삭제할값이 없어요 다시 확인하세요");
                return false;
            } else {

                const deletedStudents = [];
                studentRepository.students.forEach(element => {
                    console.log("엘레먼트" + element);
                    console.log(element.num);

                    if (parseInt(element.num) !== sno) {
                        deletedStudents.push(element);
                    }
                });

                studentRepository.students = [...deletedStudents];
                this.readStudent(studentRepository.students);

                callback(studentRepository.students)
            };
        })

    }
}
