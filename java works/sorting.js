var num1=10,num2=20,num3=30;
if((num1>num2) && (num1>num3))
{
    // console.log(`num1 is largest ${num1}`);
    if(num2>num3)
    {
        // console.log(`second ${num2}`);
        console.log(`sorted order ${num1} ${num2} ${num3}`);
    }
    else{
        // console.log(`second ${num3}`);
        console.log(`sorted order ${num1} ${num3} ${num2}`);

    }



}
if((num2>num1)&&(num2>num3))
{
    // console.log(`num2 is largest ${num2}`);

    if(num1>num3)
    {
        // console.log(`second ${num2}`);
        console.log(`sorted order ${num2} ${num1}${num3}`);

    }
    else{
        // console.log(`second ${num3}`);
        console.log(`sorted order ${num2} ${num3} ${num1}`);

    }
}
if((num3>num1)&&(num3>num2))
{
    // console.log(`num3 is largest ${num3}`);

    if(num2>num1)
    {
        // console.log(`second ${num2}`);
        console.log(`sorted order ${num3} ${num2} ${num1}`);

    }
    else{
        // console.log(`second ${num3}`);
        console.log(`sorted order ${num3} ${num1} ${num2}`);

    }
}



