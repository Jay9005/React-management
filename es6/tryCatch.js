//자바스크립트에는 내장된 Error 객체가 있다.

function checkEn(en){
    return en.match('A') ? en : new Error(`알파벳 A 가 아닙니다 : 검색한 알파벳 ${en}`);
}

var en = 'C';
const checkedEn = checkEn(en);
if(checkedEn instanceof Error){
    console.error(`Error : ${checkedEn.message}`);
} else{
    console.log(`알파벳 : ${checkedEn}`);
}

//에러 메시지는 message 프로퍼티가 있다.
function checkName(name){
    return name.match("최현웅") ? name : new Error(`${name}분은 오랫동안 빠진 사람입니다`);
}

const name = null;
try{
    const checkedName = checkName(name);
    if(checkedName instanceof Error){
        console.error(`Error : ${checkedName.message}`);
    }else{
        console.log(`참석자 이름 : ${checkedName}`);
    }
}catch(err){
    console.log(`${err.message}`);
}