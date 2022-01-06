var employees=[
    [1000,"ram",15000,"hr",1990,2000],
    [1001,"ravi",25000,"hr",1989,2005],
    [1002,"akhil",7000,"developer",2000,2010],
    [1003,"nikil",38000,"developer",2010,2015],
    [1003,"rikil",32000,"developer",2010,2015],
    [1004,"ajesh",35000,"mrkt",1991,2010],
    [1005,"tom",40000,"ba",1990,2015],
    [1006,"jack",32000,"ba",2001,2010],
]
// // print employee name

// for(let employee of employees)
// {
// console.log(employee[1]);
// }

//print developpers details

// for(let employee of employees)
// {
//  if(employee[3]=="developer")  
//  {
//     console.log(employee[1]);  
//  }

// }
//expirience 
// for(let employee of employees)
// {
//     let exp=employee[5]-employee[4]
//     console.log(employee[1],exp);
// }

// print employee details who exp >10

// for(let employee of employees)
// {
//     if((employee[5]-employee[4])>10)
//     {
//     console.log(employee[1]);
//     }
// }

// highest salary with name

//  var  high_salary=0;
//  var second_salary;
//  for(employee of employees)
//  {   
   
//      if(employee[2]>high_salary)
//      {  

//         high_salary=employee[2]
//         var names=employee[1]
       
//      }
     
//  }
// console.log(high_salary,second_salary);


// highest second salary

// employees.sort((emp1,emp2)=>emp2[2]-emp1[2])
//  console.log(employees[1][2]);

// another method for highest second salary.

// var  high_salary=0;
// var second_salary;
// var third;
// for(employee of employees)
// {   
  
//     if(employee[2]>high_salary)
//     {  
//        third=second_salary;
//        second_salary=high_salary;
//        high_salary=employee[2]
//         var names=employee[1]
      
//     }
    
// }
// console.log(high_salary,second_salary,third);

// minimum salary

// employees.sort((em1,em2)=>em2[2]-em1[2])
// console.log(employees[employees.length-1][2],employees[employees.length-1][1]);

//highest salary among devolopers with printing their name.my method

// max_salary=0
// var names=[]
// var devolaper=[]
// for(employee of employees)

// {
//     if(employee[3]=="developer")
//     {
//       devolaper.push(employee)
//       if( employee[2]>max_salary)
//       {
//           max_salary=employee[2]
          
        
//       }
    
//     }
// }
// for(dev of devolaper)
// {
//     if(dev[2]==max_salary)
//     {
//         names.push(dev[1])
//     }
// }
// console.log(names,max_salary);

//highest salary among devolopers using function

// var dev=[]
// for(employee of employees)
// {
//     if(employee[3]=="developer")
//     {
//        dev.push(employee)
//     }
// }

// dev.sort((em1,em2)=>em2[2]-em1[2])
// console.log(dev[0][2]);

// print employee detais starts with "a".

// for(employee of employees)
// {
//     if(employee[1][0]=="a"||employee[1][0]=="A")
//     {
//         console.log(employee[1]);
//     }
// }

// print details of employees who worked in period of time 2010 to 2015

for(let emp of employees)
{
    if(emp[4]>=2010 && emp[5]<=2015)
    {
           console.log(emp);
    }
} 






