class Student {
  constructor(firstName, lastName, birthYear) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grades = [];
    this.attendance = new Array(25).fill(undefined);
  }

  calculateAge() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthYear;
  }

  calculateAverageGrade() {
    if (this.grades.length === 0) {
      return 0;
    }
    const sum = this.grades.reduce((total, grade) => total + grade, 0);
    return sum / this.grades.length;
  }

  present() {
    const index = this.attendance.findIndex((item) => item === undefined);
    if (index !== -1) {
      this.attendance[index] = true;
    }
  }

  absent() {
    const index = this.attendance.findIndex((item) => item === undefined);
    if (index !== -1) {
      this.attendance[index] = false;
    }
  }

  summary() {
    const averageGrade = this.calculateAverageGrade();
    const totalAttendances = this.attendance.filter(
      (val) => val !== undefined
    ).length;
    const totalLessons = this.attendance.length;
    const attendancePercentage = totalAttendances / totalLessons;

    if (averageGrade > 90 && attendancePercentage > 0.9) {
      return "Молодець!";
    } else if (averageGrade > 90 || attendancePercentage > 0.9) {
      return "Добре, але можна краще";
    } else {
      return "Редиска!";
    }
  }
}

  function displayStudentInfoInHTML(student, containerId) {
    const container = document.getElementById(containerId);

    if (!container) {
      console.error(`Container with ID ${containerId} not found.`);
      return;
    }
    const presentCount = student.attendance.filter(
    (value) => value === true
    ).length;
    const absentCount = student.attendance.filter(
    (value) => value === false
    ).length;

    const infoHTML = `
    <div>
      <strong>Ім'я:</strong> ${student.firstName}
    </div>
    <div>
      <strong>Прізвище:</strong> ${student.lastName}
    </div>
    <div>
      <strong>Рік народження:</strong> ${student.birthYear}
    </div>
    <div>
      <strong>Вік:</strong> ${student.calculateAge()}
    </div>
    <div>
      <strong>Оцінки:</strong> ${student.grades.join(", ")}
    </div>
    <div>
   
    <div>
      <strong>Середній бал:</strong> ${student
        .calculateAverageGrade()
        .toFixed(2)}
    </div>
     <div>
      <strong>Присутній: ${presentCount} занять
    </div>
     <div>
      <strong>Відсутній: ${absentCount} занять
    </div>
    
    <div>
      <strong>Summary:</strong> ${student.summary()}
    </div>
  `;

    container.innerHTML = infoHTML;
  }

    const student1 = new Student("Іван", "Петров", 2000);
    student1.grades = [95, 88, 92, 97];
    student1.present();
    student1.present();
    student1.present();
    student1.present();

    const student2 = new Student("Марія", "Іванова", 2001);
    student2.grades = [87, 91, 84, 93];
    student2.present();
    student2.absent();
    student2.absent();
    student2.absent();
    student2.present();
  

    const student3 = new Student("Люк", "Скайуокер", 2004);
    student3.grades = [43, 82, 84, 93];
    student3.present();
    student3.present();
    student3.absent();
    student3.present();

  displayStudentInfoInHTML(student1, 'studentInfoContainer1');
  displayStudentInfoInHTML(student2, 'studentInfoContainer2');
   displayStudentInfoInHTML(student3, "studentInfoContainer3");

