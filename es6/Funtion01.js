//함수 선언
function bodyEx(){
    //여기가 바디
    console.log("현창아 함수는 선언하고 호출 해야된단다");
}

//함수 호출
bodyEx();
//함수 참조
bodyEx;

//함수 반환값
function getEx00(){
    return "반환";
}

function getEx01(){
}

console.log(getEx00());
console.log(getEx01());

//함수를 변수에 할당하면 다름 이름으로 함수 호출 가능
const Ex0 = bodyEx;
Ex0();

//객체 프로퍼티에 함수를 할당
const Ex1 = {};
Ex1.Ex0 = bodyEx;
Ex1.Ex0();

//함수와 매개변수 a,b 매개변수
function sum(a,b){
    return (a+b);
}

//5, 10 실제 매개변수 : 함수 바디 안에서만 존재
sum(5,10);

function moonjae03(x){
    console.log(`---1 moonjae03 내부 : ${x}`);
    x=5;
    console.log(`---2 moonjae03 내부 : ${x} (할당 후)`);
}

var x =3;
console.log(`--3 moonjae03를 호출하기 전 x: ${x}`);
moonjae03(x);
console.log(`--4 moonjae03를 호출 한 다음 x:${x}`);

//함수 안에서 객체 변경
function moonjae04(u){
    u.message = `moonjae04 안에서 수정함 (이전 값 : '${u.message}')`;
}

let u = {
    message:"초기값"
};

console.log(`moonjae04 를 호출하기 전 : u.message = "${u.message}"`);
moonjae04(u);
console.log(`moonjae04 를 호출 후 : u.message = "${u.message}"`);

function moonjae04(e){
    e.message = `A`;
}

let e = {
    message:"B"
};

console.log(`1 : "${e.message}"`);
moonjae04(e);
console.log(`2 : "${e.message}"`);

//자바스크립트는 매개변수의 갯수에 상관 없이 같은 이름의 함수를 호출
function f(x){
    return `in f : x = ${x}`
}
//출력값
console.log(f());
console.log(f(1));
console.log(f(1,2));

//매개변수 해체
function what({name, age, sex}){
    return `${name}${age}${sex}`
}

const p = {
    name : "경호",
    age : 9,
    sex : "남자"
};

console.log(what(p)); //경호9남자

const k = {
    word : "말",
    speak(){return `라떼는 ~ ${this.word}이야`; }
}

console.log(`1 : ${k.speak()}`);

const speak = k.speak;
console.log(`2 : ${speak()}`);

//call
const team = {name : "팀"};
const group = {name : "그룹"};

function ch() {
    return `${this.name}을 짜보겠어요`;
}

console.log(ch());
console.log(ch.call(team));
console.log(ch.call(group));

function mix(member, ox){
    this.member = member;
    this.ox = ox;
}
mix.call(team, 10, 'o')
console.log(team);

//apply는 배열로
mix.apply(group, [2, 'x']);
console.log(group);

const NoChange = mix.bind(team);
NoChange(100,'x');
console.log(team);
NoChange.call(group, 20, 'c');
console.log(team);
console.log(group);

//결과