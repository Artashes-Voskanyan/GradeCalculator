function calculateGrade() {
 
 var homework_percent = parseInt(document.getElementById ("homework-percent").innerHTML)
 
 var homework_grade = parseFloat(document.getElementById ("hwGrade").value)
 
 homework = homework_percent * homework_grade/100
 
 var quiz_percent = parseInt(document.getElementById ("quiz-percent").innerHTML)
 
 var quiz_grade = parseFloat(document.getElementById ("quiz-grade").value)
 
 quiz = quiz_percent * quiz_grade/100
 
 var project_percent = parseInt(document.getElementById ("project-percent").innerHTML)
 
 var project_grade = parseFloat(document.getElementById ("project-grade").value)
 
 project = project_percent * project_grade/100
 
 var finalExam_percent = parseInt(document.getElementById ("finalExam-percent").innerHTML)
 
 var finalExam_grade = parseFloat(document.getElementById ("finalExam-grade").value)
 
 finalExam = finalExam_percent * finalExam_grade/100
 
 var currentGrade = homework + quiz + project + finalExam
  console.log(currentGrade)

  document.getElementById("currentGrade").innerHTML= currentGrade
}
