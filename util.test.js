// ******* Unit Tests *******

// Imports your test in
const { generateText } = require('./util');

// Test for text output
test('should output name and age', () => {

    // The input values to be used
    const text = generateText('Muldoon', 29);

    // The expected result
    expect(text).toBe('Muldoon (29 years old)');

});

// Test for checking false positive
test('should output data-less text', () => {

    // Sets null inputs
    const text = generateText('', null);

    // Output should not return anything from input
    expect(text).toBe(' (null years old)');

});