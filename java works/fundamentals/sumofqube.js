var num=555;
var res=0;
while(num!=0)
{
    let last_number=num%10;
    res+=last_number*last_number*last_number;//res+=last_number***3
    num=Math.floor(num/10);
}
console.log(res);
