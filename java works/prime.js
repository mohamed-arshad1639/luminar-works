
var num=4;
var flag=0;


for(let i=2; i<num; i++ )
{
    if(num%i==0) {
        flag=1;
        break;
    }
}
if(flag==0)
{
    console.log("its a prime number");
}
else{
    console.log("not  a prime number");
}
