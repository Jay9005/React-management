const words = ["Beachball", "Rodeo", "Angel", "Aardvark", "Bali"];
const alphabeticl= words.reduce((a,x)=> {
    if(!a[x[0]]) a[x[0]]=[];
    a[x[0]].push(x);
    return a;
},{});
console.log(alphabeticl);


// console.log((words.sort()).reduce((a,x)=> {
//     if(!a[x[0]]) a[x[0]]=[];
//     a[x[0]].push(x);
//     return a;
// },{}));

console.log(words.reduce((a,w)=> w.length>6 ? a+" "+w : a, "").trim());
console.log(words.reduce((a,w)=> w.length>6 ? a+" "+w : a, ""));

console.log(words.map((x,i)=> ({words:x, index:i})));

