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
// plusOne function
function plusOne (num) {
    if(typeof num === "number") {
        return num + 1;
    } return 0;
}