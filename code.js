// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// sayHello function
function sayHello(name) {
    return (typeof name === "string" && isNaN(name) ===true ? "Hello, " + name + "!" : "Hello, World!");
}

//isFive function
function isFive(num){
    return parseFloat(num) === 5;
}

//isEven function
function isEven(num){
    return (isNaN(num)!==true ? parseFloat(num) % 2 === 0 : false);
}

//isVowel function
function isVowel(input){
    console.log("".match(/a|e|i|o|u /i));
    return (input.match(/a|e|i|o|u /i))
}
// plusOne function
function plusOne (num) {
    if(typeof num === "number") {
        return num + 1;
    } return 0;
}