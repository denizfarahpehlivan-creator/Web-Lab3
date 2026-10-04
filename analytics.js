function calculateClassAverage(students, courseId) {
    let total = 0;
    let count = 0;

    for (let student of students) {
        for (let course of student.courses) {
            if (course.courseId === courseId) {
                total += course.grade;
                count++;
            }
        }
    }

    return total / count;
}


function findTopStudent(students) {
    return students.reduce((topStudent, currentStudent) => {
        if (currentStudent.getAverage() > topStudent.getAverage()) {
            return currentStudent;
        }

        return topStudent;
    });
}


function filterStudents(students, criteriaFn) {
    return students.filter(criteriaFn);
}


export {
    calculateClassAverage,
    findTopStudent,
    filterStudents
};
