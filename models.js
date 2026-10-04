class Student {
    constructor(id, name, courses) {

        Object.defineProperty(this, "id", {
            value: id,
            writable: false,
            configurable: false
        });

        this.name = name;
        this.courses = courses;
    }

    addCourse(courseId, grade) {
        this.courses.push({
            courseId: courseId,
            grade: grade
        });
    }

    getAverage() {
        let total = 0;

        for (let course of this.courses) {
            total += course.grade;
        }

        return total / this.courses.length;
    }
}

export default Student;