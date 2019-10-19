let interpolation = "You can see that"
let currentTemp=19.5;
let heating = true;
let cooling = false;
const RED=Symbol("The Sun");
const BLUE=Symbol("The Sun");
const result = RED===BLUE;

const sentences = [
	{content:"Line1\nLin2"},
    {content:"Windows line 1\r\nWindows line 2"},
    {content:"speed:\t60kph"},
    {content:"Don\'t"},
    {content:'sam adid \"hello\".'},
    {content:`New in ES6 : \`strings.`},
    {content:`New in ES6 : ${interpolation}`},
    {content:"Use \\\\ to represent \\!"},
    {content:"De Morgan's law: \u2310(P \u22c0Q)"},
    {content:"\xc9p\xe9e is fun, but foilis more fun"},
    {content:"ASCII NUL: A1\0A2"},
    {content:"Vertical tab:A1\vA2"},
    {content:"Backspace: A1\bA2"},
    {content:"Form feed: A1\fA2"},
    {content:"The current temperature is"+currentTemp+"\u0060C"},
    {content:`The current temperature is ${currentTemp}\u0060C`},
    {content:"Line1\
    Line2"},
    {content:"Line1\n\
    Line2"},
    {content:`Line1\
    Line2`},
    {content:`Line1\
    Line2
    Line3`},
    {content:"Line1\n"+
    "Line2\n"+
    "Line3"},
    {content:'Current temperature:\n'+
    `\t${currentTemp}\u00b0C\n`+
    "Don't worry... the heat is on!"},
    {content:`${heating}--${cooling}`},
    {content:`${result}`},


];

function say({content}){
	console.log(`${content}`);
}

for(let s of sentences){
	say(s);
}

console.log(RED);