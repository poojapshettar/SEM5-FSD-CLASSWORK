var students = ["Raj" , "Vinay" , "Sam" , "Vijay" , "Abdul"]
//console.log(students.legth)
// students.unshift("Karuna")
// console.log(students)
var fewstudents1 = students.slice(1,2)
//slice will not change the original array
//takes from index 1 to <2.
console.log(fewstudents1)
console.log(students)
var fewStudents2 = students.splice(1,2)
//aplice will change the original array,
//starts at index 1 and takes two elements
console.log(fewStudens2)
console.log(students)