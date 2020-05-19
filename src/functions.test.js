const { capitalize, reverse } = require('./functions.js');

test("capitalize hello to be equal Hello", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("reverse hello to be equal olleh", () => {
    expect(reverse("hello")).toBe("olleh");
});