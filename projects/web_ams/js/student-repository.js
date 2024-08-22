export class StudentRepository {
    constructor() {
        this.students = [];
    }

    set students(students) {
        this._students = students;
    }

    get students() {
        return this._students;
    }

    addStudent(student) {
        student.totalScore = this.totalScore(student);
        student.avgScore = this.avgScore(student);
        this.students.push(student);
        this.rankScore();
    }

    findAllStudent() {
        return [...this.students];
    }

    // delStudent() {
    //     this.students.pop();
    // }

    totalScore(student) {
        return student.kor + student.en + student.math;
    }

    avgScore(student) {
        return Math.round(this.totalScore(student) / 3);
    }

    rankScore() {
        // 내림차순 정렬
        this.students.sort((a, b) => b.avgScore - a.avgScore);
        // rank란 프로퍼티로 값 매기기
        for (let i = 0; i < this.students.length; i++) {
            this.students[i].rank = i + 1;
        }
    }

    //번호 정렬
    numSort() {
        this.students.sort((a, b) => a.num - b.num)
    }
    //이름 정렬 //문자열에다가 사칙연산 하지 말자.
    nameSort() {
        this.students.sort((a, b) => a.name.localeCompare(b.name))
    }

}