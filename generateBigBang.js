const fs = require('fs');

// Function to generate the array
function generateArray() {
    const result = [];

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("BIGBANG");
        } else if (i % 3 === 0) {
            result.push("BIG");
        } else if (i % 5 === 0) {
            result.push("BANG");
        } else {
            result.push(i.toString());
        }
    }

    return result;
}

// Generate the array
const outputArray = generateArray();

// Write the output to 'output.json'
fs.writeFile('output.json', JSON.stringify(outputArray, null, 2), (err) => {
    if (err) {
        console.error('Error writing to file', err);
    } else {
        console.log('Output written to output.json');
    }
});