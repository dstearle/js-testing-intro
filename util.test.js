// Imports in puppeteer for chrome simulation
const puppeteer = require('puppeteer');

// Imports your functions in for testing
const { generateText, checkAndGenerate } = require('./util');



// ******* Unit Tests *******

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



// ******* Integration Tests *******

test('should generate a valid text output', () => {

    // The generated text
    const text = checkAndGenerate('Robert', 35);
    // The expected result
    expect(text).toBe('Robert (35 years old)');

});



// ******* End To End Tests *******

test('should click around', async () => {

    // Launches Chromium browser from puppeteer
    const browser = await puppeteer.launch({

        headless: false,
        slowMo: 80,
        args: ['--window-size=1920,1080']

    });

    // Creates a new page
    const page = await browser.newPage();
    // The page we inted to go to
    await page.goto('http://127.0.0.1:5500/');

    // Clicks the input field for adding a name
    await page.click('input#name');
    // Name to be typed into the name input field
    await page.type('input#name', 'Hammond');
    // Clicks the input field for adding age
    await page.click('input#age');
    // Age to be typed into the name input field
    await page.type('input#age', '69');

    // Clicks the button to add the user's info
    await page.click('#btnAddUser');

    // The out of the submitted user information to be checked
    const finalText = await page.$eval('.user-item', el => el.textContent);
    expect(finalText).toBe('Hammond (69 years old)');

});