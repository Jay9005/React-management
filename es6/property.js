const obj ={};
obj.color ="yellow";

obj["un identifier"]=3;
console.log(obj["un identifier"]);
console.log(obj["color"]);

const SIZE = Symbol();
obj[SIZE]=8;
console.log(obj[SIZE]);

let a=17;

function aa(){
    let a=20;
    console.log(a);
}

const sam1 = {
    name: 'Sam',
    age:5,
};

const sam2 = { name: 'Sam', age:5};

const sam3 = {
    name: 'Sam',
    classification:{
        kingdom:'Anamalia',
        phylum:'chordata',
        class:'Mamalia',
        order:'Carnivoria',
        family:'Felidae',
        subfamily:'Felinae',
        genus:'Felis',
        species:'catus'
    },
};

console.log(sam3.classification.family);
console.log(sam3["classification"].family);
console.log(sam3.classification["family"]);
console.log(sam3["classification"]["family"]);

sam3.speak = function(){
    return "Meow!";
};

console.log(sam3.speak());

const s = 10;
s.rating=3;
console.log(s);