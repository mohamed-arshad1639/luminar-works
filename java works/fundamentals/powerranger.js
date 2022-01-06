// var num=4;
// temp=0;
// i=1;
// while(i<=3)
// {
//  let res=(num+(num*10)+num)+((num*100)+(num*10)+num);
//  i++;
// }



// other method


// var num=7;
// var i=1;
// var res="";
// while(i<=num)
// {
//     res+=num;
//     i++;
//     console.log(res);
  
// }


// sum of this pattern

var num=3;
var i=1;
var res="";
var sum=0;
while(i<=num)
{
    res+=num;
    console.log(res);
    sum+=Number(res);
    i++
}
console.log(sum);

