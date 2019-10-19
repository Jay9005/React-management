function increase(number, callback){
    setTimeout(() => {
    const result = number + 10;
    if(callback) {
    callback(result);
    }
    }, 1000)
    }
    increase(0, result => {
    console.log(result);
    });

    const moment = require('moment-timezone');
    const dd = new Date(Date.UTC(2019, 10, 11));
    console.log(dd);

    const a = moment.tz([2019,9,17,4,43], 'Asia/Seoul').toDate();
    const b = moment.tz([2019,9,17,4,43], 'America/New_York').toDate();

    console.log(a);
    console.log(b);

    const before = {d: new Date()};
    console.log(before.d instanceof Date);
    console.log(`before.d = ${before.d}`);
    const json = JSON.stringify(before);
    console.log(`json = ${json}`);
    const after = JSON.parse(json);
    console.log(`after = ${after}`);
    console.log(after.d instanceof Date);
    console.log(typeof after.d);
    after.d = new Date(after.d);
    console.log(`after.d = $after.d}`)
    console.log(after.d instanceof Date);

