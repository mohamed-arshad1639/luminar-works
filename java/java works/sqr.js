var lower=0;
var upper=100;
var num=1;
var count=0;
for(i=0; i<=upper; i++)
{
    if((i**num>lower)&&(i**num<upper))
{
    console.log(i);
    count++;

}
}
console.log(`count ${count}`);