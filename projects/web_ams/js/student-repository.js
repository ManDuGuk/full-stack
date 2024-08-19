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

    delStudent() {
        this.students.pop();
    }

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
}