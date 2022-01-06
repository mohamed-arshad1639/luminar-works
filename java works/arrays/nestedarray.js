var students=[
    [1000,"akhil","mearnstack",145,"mca"],
    [1001,"anu","mearnstack",165,"bca"],
    [1002,"nikil","django",175,"bca"],
    [1003,"vjil","django",165,"mca"],
    [1004,"tim","testing",185,"bca"],
    [1005,"jhon","testing",155,"mca"],
]


// console.log(students[0]); // to print data in the index number

// console.log(students[2][2]); // to print  course  in the index number 2

//printing name of students

// for(let student of students)
// console.log(student[2]);

// print details of students in the course of mean stack

// for(let student of students)
// {  
    
//     let courses=["django"]
//     if(student[2]==courses)
//       {
//           console.log(student);
//       }
// }

// print details of students mark> 160in the course of mean stack

// for(let student of students)
// {  
    
//     if(student[3]>160)
//       {
//           console.log(student);
//       }
// }

// print name of students in the course of mean stack

// for(let student of students)
// {  
    
//     let courses=["django"]
//     if(student[2]==courses)
//       {
//           console.log(student[1]);
//       }
// }

// print name of students in django  mark> 160 in the course of mean stack.

// for(let student of students)
// {  
    
//     if(student[3]>160 && student[2]=="django")
//       {
//           console.log(student[1]);
//       }
// }

 //  highest total

         // method 1

//  var max_total=0;
// for(let student of students)
// {  
    
//     if(student[3]>large)
//       {
//           large=student[3]
//       }
     
// }
// console.log(max_total);
      
       // method 2

       var max_total=students.reduce((st1,st2)=>st1[3]>st2[3]?st1:st2);
       console.log(max_total[3]);

