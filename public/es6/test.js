'use strict';
//es^기능 : 블록 스코프 변수 선언

const sentences = [
	{subject:'JavaScript', verb: 'is', object:'great'},
	{subject:'Elephants', verb:'are', object:'large'},
];

//es6기능: 객체 분해
function say({subject, verb, object}){
	//es6기능:템플릿 문자열
	//아래 사용한것은 따옴표가 아니라 백틱(`), 즉
	////키볻의 탭키 바로 위에 있는 문자입니다.
	console.log(`${subject} ${verb} ${object}`);
}
//es6기능 :for..of
for(let s of sentences){
	say(s);
}
