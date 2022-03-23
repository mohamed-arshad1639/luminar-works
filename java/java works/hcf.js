var num1=25;
var num2=50;
var fact=0
var limit=0;
var count=0;//to find how much time the loop works

num1>num2?limit=num1:limit=num2;

for(let i=1;i<=limit;i++)
{
   if((num2%i==0)&&(num1%i==0))

   {
      console.log(i);
      fact=i;
     

   }
   count++;//for count the loop

}
console.log(`highest value ${fact}`);
console.log (`count ${count}`);