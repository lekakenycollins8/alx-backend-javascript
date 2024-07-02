export default function updateStudentGradeByCity(list, city, newGrades) {
  return list.filter((student) => student.location === city).map(
    (student) => {
      newGrades.map((studentGrade) => {
        if (studentGrade.studentId === student.id) {
          student.grade = studentGrade.grade;
        }
        if (!student.hasOwnProperty('grade')) {
          student.grade = 'N/A';
        }
        return student;
      });
      return student;
    },
  );
}
