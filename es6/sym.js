const sym = Symbol();
console.log(sym); //symbol()
console.log(typeof sym); //symbol

const sym1=Symbol("test");
console.log(sym1); //symbol(test)

//Type error
//const sym2=new Symbol();

//TypeError: Cannot convert a Symbol value to a string
//let sys = Symbol();
//sys = sys+'123';

const name = Symbol('이름');
const gender=Symbol('성별');
const studyGroup = {
    [name]:'러블리정',
    [gender]:'여성',
    age:29
};

console.log(studyGroup[name]); //러블리정

for(const prop in studyGroup){
    console.log(prop,studyGroup[prop]); //age:29
}

Object.keys(studyGroup).forEach(k=> {
    console.log(k, studyGroup[k]); //age:29
})

Object.getOwnPropertyNames(studyGroup).forEach(k =>{
    console.log(k,studyGroup[k]); //age:29
})

Object.getOwnPropertySymbols(studyGroup).forEach(k=>{
    console.log(k,studyGroup[k]); //age:29 Symbol(이름) "러블리정" Symbol(성별) "여성"
})

Reflect.ownKeys(studyGroup).forEach(k=>{
    console.log(k,studyGroup[k]);//age:29 Symbol(이름) "러블리정" Symbol(성별) "여성"
})


//심볼이 이미 생성되어있다면 재사용함.
const common1 = Symbol.for('공유심볼');
//symbol 레지스트리에서 이미 만들어진 Symbol을 검색
const common2 = Symbol.for('공유심볼');

console.log(common1===common2); //ture

console.log(Symbol.keyFor(common1)); //공유심볼

//Symbol.for메소드는 하나의 심볼을 생성하여 키를 통해 심볼 공유
//Symbol를 통해 생성된 심볼은 키가 없다.
const shareSym = Symbol.for('key');
const key1= Symbol.keyFor(shareSym);
console.log(key1); //key

const unshareSym = Symbol('key');
const key2= Symbol.keyFor(unshareSym);
console.log(key2); //undefined

//Well-Known Symbol을 참조(ex: Array.prototype[Symbol.iterator])
//Array, String, Map, Set 에서 Symbol.iterator를 키로 사용하여 이터레이터 동작
const iterable = ['1', '2', '3'];
const iterator = iterable[Symbol.iterator]();
console.log(iterator.next()); //1
console.log(iterator.next()); //2
console.log(iterator.next()); //3
console.log(iterator.next()); //undefined