// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
//sayHello
describe('sayHello', function(){
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called.', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return "Hello, Jane!" when passed "Jane"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return "Hello, Alex!" when passed "Alex"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return "Hello, Pat!" when passed "Pat"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return "Hello, World!" when passed "World"', function () { expect(sayHello("World")).toBe("Hello, World!")});
    it('should return "Hello, World!" when passed true', function () {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed null', function () {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed an empty string', function () {
        expect(sayHello("")).toBe("Hello, World!");
    })
    it('should return "Hello, World!" when passed a number', function () {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed a number inside a string', function(){
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it('should return "Hello, World!" when passed a different data type', function () {
        expect(sayHello(['fruits', 'veggies', 'grains'])).toBe("Hello, World!");
    });
});
//isFive
    describe('isFive',function () {
        it('should be a defined function', function() {
            expect(typeof isFive).toBe('function');
        });
        it('should return a boolean no matter the input', function (){
            expect(isFive("Jello")).toBe(false);
        });
        it('should return true when passed 5', function (){
            expect(isFive(5)).toBe(true);
        });
        it('should return true when passed "5"', function (){
            expect(isFive("5")).toBe(true);
        });
    })
    // plusOne
describe('plusOne',function () {
    it ('should be a defined function', function() {
        expect(typeof plusOne).toBe('function');
    })
    it('should return a number', function() {
        expect(typeof plusOne()).toBe("number");
    })
    it('should return 5 when passed 4', function() {
    expect(plusOne(4)).toBe(5)})
    it('should return 0 when passed anything but a number', function () {
        expect(plusOne(true)).toBe(0)
    })
    it('should return 6 when passed 5', function() {
        expect(plusOne(5)).toBe(5 + 1);
    })
})
});