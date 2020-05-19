const { capitalize, reverse, calculator } = require('./functions.js');

test("capitalize hello to be equal Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("reverse hello to be equal olleh", () => {
    expect(reverse("hello")).toBe("olleh");
});

test("Calculator sum 1 and 2 be equal to 3", () => {
    expect(calculator.sum(1,2)).toBe(3)
})

test("Calculator subs 1 and 2 be equal to 3", () => {
    expect(calculator.subs(1,2)).toBe(-1)
})

test("Calculator mult 1 and 2 be equal to 3", () => {
    expect(calculator.mult(1,2)).toBe(2)
})

test("Calculator div 1 and 2 be equal to 3", () => {
    expect(calculator.div(1,2)).toBeCloseTo(0.5)
})






