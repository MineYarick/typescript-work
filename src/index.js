// Задача: Список студентів з середнім балом, та яка знаходить студента з найвищим середнім балом.
const students = [
    { name: "Аліса", course: 1, averageGrade: 85 },
    { name: "Герман", course: 3, averageGrade: 92 },
    { name: "Чарлі", course: 2, averageGrade: 78 },
];
let totalAverage = 0;
let topStudent = students[0];
let sum = 0;
for (let student of students) {
    sum += student.averageGrade;
    if (student.averageGrade > topStudent.averageGrade) {
        topStudent = student;
    }
    console.log(`Студент: ${student.name}, Курс: ${student.course}, Середній бал: ${student.averageGrade}`);
}
totalAverage = sum / students.length;
console.log(`Загальний середній бал по всіх студентах: ${totalAverage}`);
if (topStudent !== null) {
    console.log(`Студент з найвищим середнім балом це ${topStudent.name}, його бал: ${topStudent.averageGrade}`);
}
else {
    console.log("Студент з найвищим середнім балом не знайдений.");
}
