// Задача: Список студентів з середнім балом, та яка знаходить студента з найвищим середнім балом.

type Student = {
    name: string;
    course: number;
    averageGrade: number;
}

const students: Student[] = [
    { name: "Аліса", course: 1, averageGrade: 85 },
    { name: "Герман", course: 3, averageGrade: 92 },
    { name: "Чарлі", course: 2, averageGrade: 78 },
];

let totalAverage: number = 0;
let topStudent: Student = students[0];

let sum: number = 0;

for(let student of students) {
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
} else {
    console.log("Студент з найвищим середнім балом не знайдений.");
}
