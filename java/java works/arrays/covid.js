var coivd_data=[
    [1,"trivandrum",40000,200,38000,8,5],
    [2,"kollam",35000,250,33000,7,3],
    [3,"kottayam",50000,500,45000,5,2],
    [4,"alapuzha",25000,150,24000,9,5],
    [5,"ernamkulam",70000,500,65000,9,5],
    [6,"thrissur",65000,550,60000,8,7],
    [7,"iduky",1000,50,9500,9,6]   
]

// q1 higest test + ve case district

// var blackListDistrict=coivd_data.reduce((d1,d2)=>d1[2]>d2[2]?d1:d2)
// console.log(blackListDistrict);


// q2 district with higest 1 dose vaccination rate

// var highestVaccRate=coivd_data.reduce((d1,d2)=>d1[5]>d2[5]?d1:d2)[5]
// console.log(highestVaccRate);

// var greenDistrict=coivd_data.filter(d=> d[5]==highestVaccRate).map(nm=>nm[1])
// console.log(greenDistrict);

// q3 district with lowest death cases

// var lowestDeathCase=coivd_data.reduce((d1,d2)=>d1[3]<d2[3]?d1:d2)
// console.log(lowestDeathCase);



// q4 sort district with +ve cases

// var positiveWithsorted=coivd_data.sort((d1,d2)=>d1[2]-d2[2])
// console.log(positiveWithsorted);

// q5 sort the districts based on 1st dose

// var sortedWithFirstDose=coivd_data.sort((d1,d2)=>d1[5]-d2[5])
// console.log(sortedWithFirstDose);


// q6 is there any states with +ve cases > 60000

// var states=coivd_data.some(d=>d[2]>60000)
// console.log(states);

// q7 print trissur details

// var trissur=coivd_data.find(d1=>d1[1]=="thrissur") 
// console.log(trissur);

// q8 total number of +ve cases
// var sum=0;
// coivd_data.filter(d1=> sum=d1[2]+sum)
// console.log(sum);

// q9 total number of cured cases

// var total_cured=0;
// coivd_data.filter(d1=> total_cured=d1[4]+total_cured)
// console.log(total_cured);


// q10 cured numbers of iduky

var cured_idukki=coivd_data.find(d1=>d1[1]=="iduky")[4]
console.log(cured_iduki);

// q11 total number of death cases