#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Get command line arguments
const args = process.argv.slice(2);
let day = Number(args[0]);
let part = Number(args[1]);
let type = Number(args[2]);

// If DAY is not provided, find the highest numbered day directory
if (!day) {
  const dirs = fs.readdirSync('.')
      .filter(file => fs.statSync(file).isDirectory() && /^\d+$/.test(file))
      .map(file => parseInt(file, 10))
      .sort((a, b) => a - b);
  
  day = Number(dirs[dirs.length - 1]);
}

function executeScript(dayNumber, scriptPart, dataType = 1) {
  let filename = dataType === 1 ? 'input.txt' : 'example.txt'
  const lines = fs.readFileSync(path.join(__dirname, dayNumber.toString(), filename), { encoding: 'utf8' })
  
  console.log(`Executing AoC 2025, Day ${dayNumber}, Part ${scriptPart}, Data: ${filename}`);
  
  const result = require(`./${dayNumber}/part${scriptPart}.js`)(lines);

  console.log(result)
}

// Execute based on whether PART is provided or not
if (!part) {
  // Execute for both PART 1 and 2
  executeScript(day, 1, 1);
  executeScript(day, 2, 1);
} else {
  // Execute for the specified PART
  executeScript(day, part, type);
}
