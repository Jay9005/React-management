const a1=[1,2,3,4,5];
const a2=[1,'two',3,null];
const a3=["A","B","C"];
const a4=[{name:"jay", age:10},
    {name:"day",age:11}
];

const a5=[
    [1,2,3,5],
    [2,3,4,5]
];

for(const b in a2){
    console.log(b, a2[b]);
}

for(const b in a2){
    console.log(b, a2[b]);
}

for(const b in a3){
    console.log(b, a3[b]);
}

for(const b in a4){
    console.log(b, a4[b]);
}

const arr = [1,2,3,4];
arr.copyWithin(1,2);

for(const a of arr){
    console.log(a);
}

arr.copyWithin(2,0,3);
for(const a of arr){
    console.log(a);
}