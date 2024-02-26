/*
- [x]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [x]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

let students = [
  {
    name: "John",
    firstTestGrade: 8,
    secondTestGrade: 9,
  },
  {
    name: "Alice",
    firstTestGrade: 7,
    secondTestGrade: 8,
  },
  {
    name: "Bob",
    firstTestGrade: 9,
    secondTestGrade: 7,
  },
  {
    name: "Eva",
    firstTestGrade: 3,
    secondTestGrade: 5,
  },
  {
    name: "Charlie",
    firstTestGrade: 5,
    secondTestGrade: 1,
  },
];

function calculateAverageGrades(grade1, grade2) {
  const convertedGrade1 = Number(grade1);
  const convertedGrade2 = Number(grade2);
  const averageResult = (convertedGrade1 + convertedGrade2) / 2;

  return averageResult;
}

function validateIfStudentPassed(studentName, averageGrade) {
  if (averageGrade >= 7) {
    alert(
      `Congratulations ${studentName}, you passed!\nGrade: ${averageGrade}`
    );
  } else alert(`${studentName}, you're reproved.\nGrade: ${averageGrade}`);
}

for (student of students) {
  validateIfStudentPassed(
    student.name,
    calculateAverageGrades(student.firstTestGrade, student.secondTestGrade)
  );
}
