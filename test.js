class Student{
    constructor(name,course,school){
        this.name = name;
        this.course = course;
        this.school = school;
    }


//Method to display 
displaystudentDisplay() {;
    console.log('Name: ${this.name}');
    console.log('Course: ${this.course}');
    console.log('School: ${this.school}');
    }
}

//Display student details
const student = new Student('Rans', 'Bachelor of Science in Information Technology', 'Northern Bukidnon State College');
student.displaystudentDisplay();
