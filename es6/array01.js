const arr=["c","d","a","ki","b","j","ka","ke","o","n"];
const array=[1,3,4,2,5];
const c =0;
/*console.log(array.sort());
console.log(arr.sort(function(a,b){
        if(a.substring(0,1)==="k"&&b.substring(0,1)==="k"){
            return 0;
        } else if(a>b){
            return 1;
        }else
            return-1;
    }
));

console.log(arr.sort((a,b)=> (a.substring(0,1)==="k"&&b.substring(0,1)==="k") ? 0: a>b ? 1:-1));
console.log(arr.sort((a,b)=> (a[0]==="k"&&b[0]==="k") ? 0: a>b ? 1:-1));

*/



class Person{
    constructor(name){
        this.name=name;
        this.id=Person.nextId++;
    }
}

Person.nextId =0;
const jamie = new Person("Jamie"),
    juliet = new Person("Juliet"),
    peter = new Person("Peter");

const ab = [jamie,juliet,peter];

console.log(ab.find(p => p.id===peter.id));

console.log(ab.find(function(p){
    return p.id ===this.id
}, juliet));