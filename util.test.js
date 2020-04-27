// ******* Unit Tests *******

// Imports your test in
const { generateText } = require('./util');

// Test for text output
test('should output name and age', () => {

    // Check 1
    // The input values to be used
    const text = generateText('Muldoon', 35);
    // The expected result
    expect(text).toBe('Muldoon (35 years old)');

    // Check 2
    // The input values to be used
    const text2 = generateText('Tembo', 40);
    // The expected result
    expect(text2).toBe('Tembo (40 years old)');

});

// Test for checking false positive
test('should output data-less text', () => {

    // Sets null inputs
    const text = generateText('', null);

    // Output should not return anything from input
    expect(text).toBe(' (null years old)');

});