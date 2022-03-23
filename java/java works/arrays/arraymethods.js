// commen arraymethods

// map()

// filter()

// reduce()

// sort()

// some()

// find()

// forEach()

//1) MAP

// var arr=[2,3,4,5,6,7,8]
// var squares=arr.map(num=>num**2)// here we are trying to find squares of each element.
// // here each element under goes through mapping ,so we can operete each element in the array.that means we can add plus or mulitiplicationor division..any operation that effect each element in the array. here do not apply condition.each values in the array considerd as object.
// var add_two=arr.map(num=>num+2)// adding two numbers

// console.log(squares);
// console.log(add_two);
// var names=["ram","anu","janu"]

// var uppnames=names.map(name=>name.toUpperCase())
// console.log(uppnames);

//FILTER

//filter()  //if there is a condition we can use filter instead of map

//10 q1 print even number

// var arr=[2,3,4,5,6,7,8]
// var even_number=arr.filter(even=>even%2==0)
// console.log(even_number);

//print start with 'a'

// var names=["arjun","akil","aravind","ram","ravi","Aravind"]
// var namez=names.filter(nm=>nm[0]=="a"||nm[0]=="A")
// console.log(namez);


// var mobiles=[
//     [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
//     [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
//     [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
//     [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
//     [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
//     [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
//     [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","5G"],
//     [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

// ]

// 
// PRINT SAMSUNG MOBILES
// var sam=mobiles.filter(mob=>mob[1]=="samsung").map(mob=>mob[2])
// console.log(sam);

//print prize below 2500

// var prize=mobiles.filter(mob=>mob[3]<25000)
// console.log(prize[]);

//REDUCE  //populating into one value,here depends only number

// var arr=[2,3,4,5,6]
// // var sum=arr.reduce((n1,n2)=>n1+n2)
// // console.log(sum);
// var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)
// console.log(max);

var mobiles=[
    [1000,"samsung","samsung f41",15000,"snapdragon","AMOLED","4g"],
    [1001,"samsung","samsung A51",32000,"snapdragon","AMOLED","5G"],
    [1002,"redmi","not 10 pro",19000,"snapdragon","LED","4g"],
    [1003,"redmi","mi 11 lite ",30000,"mediatek","LED","4G"],
    [1004,"apple","12 pro",72000,"snapdragon","AMOLED","4g"],
    [1005,"apple","12 pro max",100000,"snapdragon","AMOLED","5G"],
    [1006,"one plus","nord 2",29000,"snapdragon","AMOLED","5G"],
    [1007,"one plus","nord 2",15000,"mediatek","LED","4G"],
    

]
    //print costly mobile

// var max=mobiles.reduce((m1,m2)=>m1[3]>m2[3]?m1:m2)
// console.log(max);

    // print cheap mobile

// var min=mobiles.reduce((m1,m2)=>m1[3]<m2[3]?m1:m2)
// console.log(min);

// var min=mobiles.reduce((m1,m2)=>m1[3]<m2[3]?m1:m2)[3]// here the prize of the mobile assign into min
// console.log(min);



//SOME // it return ture or false value



//CHECK mobiles under 10000

// var isAvl=mobiles.some(mob=>mob[3]==10000)
// console.log(isAvl);

// check availablity of mobiles b/w 10000 and 20000

// var isAvl=mobiles.some(mob=>mob[3]>=10000 && mob[3]<=20000)
// console.log(isAvl);


// FIND to find specific data.it returns only first data that checked.if we using filter it returns all the data of condition obyed,but in find only returns the first data of condition obyed.


// find mobile id 1000


// var nameById=mobiles.find(mob=>mob[0]==1000)
// console.log(nameById);


