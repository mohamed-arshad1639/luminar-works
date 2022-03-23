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
// print mobile name USING MAP

// var mob_name=mobiles.map(mob=>mob[2])
// console.log(mob_name);

//print mobile prize

var mob_prize=mobiles.map(mob=>mob[3])
console.log(mob_prize);






















//q1 details of costly mobile.
// let cost=0;
// var mob_details;
// for(let mob of mobiles)
// {
//     if(mob[3]>cost)
//     {
//         cost=mob[3]
//         mob_details=mob
//     }
    
// }
// console.log(mob_details,"prize ",cost);

//using sort method

// mobiles.sort((mb1,mb2)=>mb2[3]-mb1[3])
// console.log(mobiles[0]);

// q2 snapdragon proccers
         
// for(mob of mobiles)
// {
//     if(mob[4]=="snapdragon")
//     {
//         console.log(mob);
//     }
// }

// q3 print costly mobile with 5G band and snapdragon proceccers

// let cost=0;
// var mob_details;
// for(let mob of mobiles)
// {
//     if((mob[4]=="snapdragon"&&mob[6]=="5G") && mob[3]>cost)
//     {
        
//         cost=mob[3]
//         mob_details=mob
    
//     }
    
// }
// console.log(mob_details)

// q3 method 2 using sort
var mob_snap=[]
// for(let mob of mobiles)
// {
//     if(mob[4]=="snapdragon"&&mob[6]=="5G")
//     {
//         mob_snap.push(mob)
//     }
// }

// mob_snap.sort((mb1,mb2)=>mb2[3]-mb1[3])
// console.log(mob_snap[0][2]);



