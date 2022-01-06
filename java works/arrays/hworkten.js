var arr1=[2,4,6,10,11];
sum=0;
var arr2=[];
var temp=0;

for(let num of arr1)
{
    sum+=num;

}
for(let num of arr1)
{
    temp=sum;
     arr2.push(temp-=num)
}

console.log(`sum = `,sum);
console.log(arr2);

