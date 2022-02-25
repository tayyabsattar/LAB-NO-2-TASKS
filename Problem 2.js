// before deleting the roll no:

var student = {

    name :"David Rayy",
    sclass :"VI",
    rollno :12,
};
  console.log(student);

// after deleting the roll no:

var student = {

    name:"David Rayy",
    sclass:"VI",
    rollno:12 ,
};

console.log(student);
delete student.rollno;
console.log(student);
