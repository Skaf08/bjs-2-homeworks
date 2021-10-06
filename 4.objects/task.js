function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function(mark) {
  if(this.marks === undefined){ 
    this.marks = [mark];
  } else {
    this.marks.push(mark);
  }
}

Student.prototype.addMarks = function(...mark) {
  while(this.marks === undefined){ 
    let marks = [];
  }
  mark.forEach(item => this.marks.push(item));            
}

Student.prototype.getAverage = function () {
  let sum = 0;
  this.marks.forEach(item => sum = sum + item);
  return Number((sum/this.marks.length).toFixed(4));
}

Student.prototype.exclude = function (reason) {
  delete(this.subject);
  delete(this.marks);
  this.excluded = reason;
}
