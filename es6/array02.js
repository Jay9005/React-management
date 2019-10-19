const items=["widget","gadget"];
const prices=[9.95, 22.95];

const cart=items.map((x,i) =>({name: x, price:prices[i]}));
console.log(cart);


Array.prototype.arrCustom = function(){};
Object.prototype.objCustom = function(){};

var ex =[3,5,7];
ex.foo="hellow";

const ex1 = [3,5,7];
for(const key in ex){
    console.log(key);
}

for(const value of ex){
    console.log(value);
}

{
    const hello = 'Hello CSS-Tricks Reader!'
    const hell = {id :'Hellow', name:'name'}
    console.log(hello) // 'Hello CSS-Tricks Reader!'
    console.log(hell)
}