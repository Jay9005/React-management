var date = new Date();
console.log(date);                          //UTC 시간  숫자Z로 표기
console.log(date.toTimeString());           //GMT 시간 UTC+0900(KST)된 시간 / 미세하게 부정확
console.log(date.toLocaleString());         //로컬 시간
console.log(date.getTimezoneOffset());      //로컬 시간과 UTC 시간 차이(단위:분)
console.log(date.valueOf());                //유닉스 시간

//Moment Timezone 라이브러리를 사용하면 오프셋, 로컬시간, 섬머타임을 해결할 수 있다.
const moment = require('moment-timezone');
var seoul = moment(new Date()).tz(`Asis/Seoul`);
var ny = moment(new Date()).tz('America/New_York');
console.log(seoul.format("YYYY-MM-DD HH:mm"));
console.log(seoul.format());
console.log(seoul);
console.log(ny.format()); 
console.log(ny);

let random = moment();          //현재
random.add(3, 'days');          //3일뒤
random.subtract(2,'years');     //2년 전으로부터 3일 후
random.endOf('month');          //2년전 3일뒤인 달의 마지막 날
//함수 종류 add 뒤 , subtract 전 , endOf 마지막 , StartOf 처음
//종류 'seconds','minutes', 'hours','days'

console.log(random);