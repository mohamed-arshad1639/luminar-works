// var num=30;
// if(num %15==0)
// {
//     console.log("fizzbuzz");

// }
// else if(num%5==0)
// {
//     console.log("buzz");
// }
// else if(num%3==0)
// {
//     console.log("fizz");
// }

// method thr
// var num=15;
// var str="";
// if(num%3==0)
// {
//     str+="fizz"

// }
// else(num%5){
//     str+="buzz"
// }

var output=[];
var count=1;

function fizzBuzz()
{
    if((count%3===0)&&(count%5==0))
    {
        output.push("fizzBuzz")
        count+=1;
    }
    else if(count%3===0)
    {
        output.push("fizz")
        count+=1;
    }
    else if(count%5==0){
        output.push("buzz")
        count+=1;

    }
    else
    {
        output.push(count)
        count=count+1;
    }
    
    console.log(output)
}

fizzBuzz()

