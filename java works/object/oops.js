var baleno={

    colors:["red","white","blue"],
    varients:["petrol"],
    price:"8 lacks",
    manufacture:"nexa",
    getPrice(){
        return this.price
    }


}

var glanza={
    manufacture:"toyota",
    prize:"9 lacks"
}
glanza.manufacture.__proto__=baleno// assigning baleno is a prototype of glanza.so glanza can inherit the baleno

console.log(glanza.varients);// here varients is the property of baleno.here glanza inherited the varients
console.log(glanza.price);// in this case glanza and beleno has same property called prize.here coinsole the glanzas price. 
console.log(baleno.getPrice);// prints the 8 lack
console.log(glanza.getPrice);//here prints 9 lakh,if there is not prize in glanza ,prize of baleno will print




