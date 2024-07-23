const fs = require('fs');
const path = require('path');
const axios = require('axios');

async function fetchAndSave(url, filename) {
  try {
    const response = await axios.get(url);
    fs.writeFileSync(filename, response.data);
    console.log(`Wrote to ${filename}`);
  } catch (error) {
    console.error(`Couldn't download ${url}`);
  }
}

async function processFile(filename) {
  try {
    const data = fs.readFileSync(filename, 'utf-8');
    const urls = data.split('\n').filter(Boolean);

    for (const url of urls) {
      const hostname = new URL(url).hostname;
      await fetchAndSave(url, hostname);
    }
  } catch (error) {
    console.error(`Error reading file ${filename}:`, error.message);
  }
}

const [,, filename] = process.argv;

if (!filename) {
  console.error('Please provide a filename as an argument.');
  process.exit(1);
}

processFile(filename);
