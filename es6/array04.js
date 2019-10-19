const data=[1,2,3];

const stats=data.reduce((a,x) => {
    a.N++;
    let delta = x-a.mean;
    a.mean += delta/a.N;
    a.M2 += delta*(x-a.mean);
    return a;
}, {N:0, mean:0, M2:0});

if(stats.N>2){
    stats.variance = stats.M2/(stats.N-1);
    stats.stdev=Math.sqrt(stats.variance);
}

console.log(stats);


