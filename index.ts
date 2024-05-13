#! /usr/bin/env node
import inquirer from "inquirer"
class Student{
    name: string  
    constructor(n:string){
        this.name = n
    }
}class Person{
    students :Student[]=[]
    addStudent(obj : any){
    this.students.push(obj)
    }
}
const persons = new Person()
//apply async function to reduce await error
const programStart = async(persons :Person) => {
  console.log(`Welcome !`);
  const ans = await inquirer.prompt({
     name : "select",
     type : "list",
     message : "Whom would you like to call ?",
     choices : ["staff" , "student"] 
  });

  if(ans.select == "staff"){
   console.log(`You can enter in the staff room !`);
   console.log(`Ask any querries !`);
   if(ans.select == "student"){
    const ans = await inquirer.prompt({
      name : "student",
           type : "input",
      message : "Hello ! student}"
     });
     const Student:any= persons.students.find(val => val.name == ans.student);
     if(! Student){
       const name = new Student( ans.student)
       persons.addStudent(name);
       console.log(`Hello my name is  ${name} , I am OK !`);
       console.log(persons.students);
      }
     }if(Student){
      console.log(`Hello my name is  ${Student.name} , I am OK !`);
       console.log(persons.students);
     }
   }
};
 programStart(persons);
 persons.addStudent(`Ali`);
 