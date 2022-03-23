// create employee object with properties eid,ename,salary,desi
// var employee={

//         eid:1000,
//         name:"tom",
//         salary:25000,
//         design:"developper"

// }
// console.log(employee.design);
// employee.age="25"
// console.log(employee);
// console.log("exp" in employee) // to check exp in employee 
// employee.["Gender"]="male"

// if ("exp" in employee)
//  {
//      employee.exp+=1;
//  }
// else{
//     employee.exp=1;
// }
// console.log(employee);

// if(student.mark>145)
{
    // student.grade="Aplus"
}
// else{
    // student.grade="A"
// }

// word count  my method

// var text="hello hai hello hai"
// var word=text.split(" ")
// console.log(word);
// var count1=0
// var count2=0
// for(wd of word)
// {   
//     if(wd=="hello")
//     {
        
//         count1++
       
//     }
//     else if(wd=="hai")
//     {
//         count2++
        
//     }
// }
// console.log("hello",count1);
// console.log("hai",count2);

// best method

// var text="hello hai hello hai"
// var wc={} // 
// var words=text.split(" ")
// for(let word of words){
//     if(word in wc)
//     {
//         wc[word]+=1
//     }
//     else{
//         wc[word]=1
//     }
// }
// console.log(wc);
// best simple method

// var text="hello hai hello hai"
// var wc={}
// text.split(" ").map(word=>word in wc?wc[word]+=1:wc[word]=1)
// console.log(wc);

//first recursive charector

// var pattern="ABABBC"
// var wc={}
// var char
// for( char of pattern)
// {
//     if(char in wc)
//      {   
//         console.log("first recusive charector is ",char);
//          break;
//      }
//      else{
//          wc[char]=1
//      }

// }


var pattern="ABABBC"
var wc={}
var op=[]
// pattern.split("").map(char=>char in wc?op.push(char):wc[char]=1)
// console.log(op[0]);

// another method
Array.from(pattern).map(char=>char in wc ? op.push(char):wc[char]=1)
console.log(op[0]);

var test="hello hai hello"
Array.from(test).forEach(word=>console.log(word))

// in this case we can only retrive the cherector by charector, we didn't get word br word.                                          



