// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
// sayHello function
function sayHello(name) {
    return (typeof name === "string" && isNaN(name) ===true ? "Hello, " + name + "!" : "Hello, World!");
}

// plusOne function
function plusOne (num) {
    if(typeof num === "number") {
        return num + 1;
    } return 0;
}