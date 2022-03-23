//try,catch,throw,finally

// try doudt full code
// catch handling code 
// throw custom error
// finally clean up process

// try { 

//     var expr="2+3*4";
//     console.log(eval(expr));
// }

// catch(error){
//     console.log(error.message);
// }


// try{
//     var mobile="85929605392"
//     if(mobile.length !=10) //!=10
//     {
//         throw new Error("invalid")
//     }
// }
// catch(error){
//     console.log(error.message);
// }

try {

if(isNaN(age))
{
    var age="qwqee"
    throw new Error("INVALID AGE,AGE MUST BE A NUMBER")
}
}
catch(error)
{
    console.log(error.message);
}
finally{
    console.log("iam first");
}

