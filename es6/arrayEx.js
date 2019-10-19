[1, 3, 5]

var data = [1, 2, 3, 4, 5, 6];


var ar=[];
var a=(acc, item)=>{
    if(item%2!=0){
    acc.push(item);
}
return acc;
}
console.log(data.reduce(a,ar));


var data = [1, 2, 3, 4, 5, 6];
var arr=[];
var a=(acc, item)=>{
    if(item%2!=0){
        acc.push(item*2);
    }
    return acc;
};
console.log(data.reduce(a,arr));

var data = [1, 2, 3, 4, 5, 6, 1];
var answer = data.reduce((a,x)=>a+=x);
console.log(answer/data.length);


const votes = ["kim", "hong", "lee", "hong", "lee", "lee", "hong"];
var check = votes.reduce((first,item)=>{
    if(!first[item]){
        first[item]=1;
    }else{
        first[item]+=1;
    }
    return first;
},{});

console.log(check);
