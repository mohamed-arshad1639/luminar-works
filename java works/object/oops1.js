// class
// object
// reference



     // classical approach

class person{

    setPerson(name,age,gender){
        this.name=name;                                      // class
        this.age=age;
        this.gender=gender
    }
    printPerson(){
        console.log(this.name,this.age,this.gender);
    }

}
var obj=new person()           // creating object
obj.setPerson("ram",25,"male") // adding values in object
obj.printPerson()


var obj1= new person()        
obj1.setPerson("akhil",24,"male")


//constructor

class student{

    constructor (name,age,gender)  //constructor is using for initializing instance varriable
    {
        this.name=name;                                     
        this.age=age;
        this.gender=gender;
    }
    printPerson(){
        console.log(this.name,this.age,this.gender);
    }

}

var obj= new person("akhil",25,"male")  //we can use here constructor method intialize the values.so we can add the data at the time of object initialisation.

// over loading

class student
{

    constructor (...args)   //so we can use here spread method intialize the values.so we can overload load the data.

    // over loading

    {
        this.name=args[0];                                     
        this.age=args[1];
        this.gender=args[2];
    }
    printPerson()
    {

        console.log(this.name,this.age,this.gender);
    }

}

 // inheritance

 class parent{       // child extends the class parent.extends is the method using for inherit two classes.
     bike(){
         console.log("duke");
     }
 }

 class child extends parent {
 bike()
 {    //super.bike()**
      console.log("benalli"); // here overrided the the childs bike() over the parent.
 }
}
 var ch=new  child()
 ch.bike()


 // **'.this' is used in current method and'.super'is used in parent






