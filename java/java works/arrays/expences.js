var expence=[15000,15000,25000,25000,30000,35000];

// printing element in array(iteration)

for(let i=0;i<expence.length;i++)
{
    console.log(expence[i]);
}

//print >25000



for(amount of expence)
{
    if(amount>25000)
    {
        console.log(amount);
    }
}



//sum of expence


var total=0;
for(amount of expence)
{
   total+=amount;
   
}
console.log(total);


//     to find max expence my method


for(i=0 ;i<expence.length;i++)
{
    let temp=expence[i];
    if(expence[i]>expence[i+1])
    {
        let max=expence[i+1]
        console.log(max);
    }
    else{
        max=expence[i+1]
        console.log(max);
    }
}





//  to print min expence best method


var min_amount=expence[0]
for(let amount of expence )
{
    if (amount<min_amount)
    {
    min_amount=amount;
    }
}
console.log(min_amount);

//  to print max expence best method


var max_amount=0;
for(let amount of expence )
{
    if (amount>max_amount)
    {
    max_amount=amount;
    }
}
console.log(max_amount);


//to push into array

eg:-expence.push(50000)

//to remove last element from an array

eg:-expence.pop()

//to  check a elements that include in an array

eg :- expence.includes(2000)



//print duplicate my method


// for(i=0;i<expence.length;i++)
// {
//     if (expence[i]==expence[i+1])
//         {
//             var duplicate=expence[i+1];
//             console.log(duplicate);
//         }

// }



//printing with out duplicate using set

var expence=[15000,25000,25000,30000,35000];

var st=new Set()
for(let amount of expence)
{
    st.add(amount)//==>here used for add element in set is .add()
}
console.log(st);

//another method to print value with out duplication using includes

var unique=[];
for (let amount of expence)
{
    if(unique.includes(amount)
    {

    }
    else{
        unique.push(amount)
    }

}
    
        
    

// }
// console.log(unique);

