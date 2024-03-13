// Define the function to increment a number
function inc(x) {
    return x + 1;
}

// Define a test using Jest
test('increment function increments the input by 1', () => {
    expect(inc(4)).toBe(5);
});

