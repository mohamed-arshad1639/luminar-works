// var num=123;
// var res="";

   
//   let  last_number=num%10;//last_number=123%10= 3
//     res+=last_number;// res=3
//     num=Math.floor(num/10);//num=123/10=12.3=>12
//     last_number=num%10;//last-number=12%10=2
//     res+=last_number;//res=3,2
//     num=Math.floor(num/10);//num=12/10=1.2=>1
//     last_number=num%10;//last-number=1%10=1
//     res+=last_number;//res=3,2,1
//     console.log(`revesed number is ${res}`);

    //solving with while loop

    var num=123;
    var res="";
    while(num!=0)
    {
        let last_number=num%10;
        res+=last_number;
        num=Math.floor(num/10);
    }
    console.log(res);


