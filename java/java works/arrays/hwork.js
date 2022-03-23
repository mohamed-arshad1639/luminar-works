
// Q1    var arr=[9,6,7,8,3,2,1]
//      if num < 5 num-1;
//      if num > 5 num+1;
// o/p ==> [10,7,8,9,2,1]


// var arr=[9,6,7,8,3,2,1]
// var temp;

// for(values of arr){
//     if(values>5)
//     {
//         temp=++values;
//         console.log(temp);
        
//     }
//     else{
//         temp=--values;
//         console.log(temp);
    
//     }
    
// } //status "success "

 


// find commen element in the two array.

 //my method

// var arr1=[10,11,20,21]
// var arr2=[11,12,20,21]

// for(num1 of arr1)
// {
//     for(num2 of arr2)
//     {
//         if(num1==num2)
//         {
//             let same=num1;
//             console.log(same);
//         }
//     }
// }

//best method(least count)

// var arr1=[10,11,20,21]
// var arr2=[11,12,20,21]
// let p1=0,p2=0 
// var count=0

// while( p1< arr1.length && p2<  arr2.length)
// {
//     if(arr1[p1]==arr2[p2])
//     {
//       console.log(`common element`,arr1[p1])
//         p1++
//         p2++
//     }
//     else if(arr1[p1]>arr2[p2])
//     {
//         p2++
//     }
//     else if(arr1[p1]<arr2[p2])
//     {
//         p1++
//     }
//     count++
// }
// console.log(`count=`,count)


// search element exist or not.

var arr=[10,11,12,15,16]
element=15
temp=0
for(num of arr)
{
    if(num==element)
    {
        console.log(`element found `,num)
        temp=1;
        break
    }
}
if(temp==0)
{
    console.log(`element not found`);
}

   //or
//    console.log(temp==0?`element not found`:"found");





