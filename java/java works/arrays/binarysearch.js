var arr=[1,2,3,4,5,10]
arr.sort((n1,n2)=>n1-n2)
var element=2;
var flag=0;
var low=0; upp=arr.length-1;
while(low<=upp){
    let mid=Math.floor((low+upp)/2)
    if(element==arr[mid])
    {
        flag=1;
        break;
    }
    else if(element>arr[mid]){
    low=mid+1;
    }
    else if(element<arr[mid]){
        upp=mid-1;
    }
}
console.log(flag==0?"not found":"found");