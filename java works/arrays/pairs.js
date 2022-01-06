// var arr=[2,3,4.5]
// sum=7;
// for(let i of arr)
// {
//     for(let j of arr)
//        {
//            if(i+j==sum)
//            {
//                console.log(`pairs are ((${i}),${j}`));

//            }
//        }
// }

//finding arrays in sorted array

var arr=[1,2,3,4,5,6];
var sum=20;
var flag=0;
var upp=arr.length-1,low=0;
while(low<upp){
    let current_sum=arr[low]+arr[upp];
    if(current_sum==sum)
    {
        console.log(`pairs are(${arr[upp]}),(${arr[low]})`);
        flag==1;
        low++;
    }
    else if (current_sum<sum)
    {
        low+=1
    }
    else if(current_sum>sum)
    {
        upp-=1;
    }

}
if(flag==0){
    console.log("no pairs");
}