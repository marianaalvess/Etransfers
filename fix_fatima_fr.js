const fs = require('fs');

// Read the file
const content = fs.readFileSync('c:/Users/RC71/Documents/etranfers.pt/script.js', 'utf8');

// Replace the French Fátima description  
const oldText = '"L'un des plus grands centres de pèlerinage marial au monde !"';
const newText = '"L\'un des plus grands centres de pèlerinage marial au monde, le Sanctuaire de Fátima reçoit des millions de visiteurs chaque année, étant aujourd\'hui un lieu de foi, de réflexion et de profonde dévotion."';

const updatedContent = content.replace(oldText, newText);

// Write back
fs.writeFileSync('c:/Users/RC71/Documents/etranfers.pt/script.js', updatedContent, 'utf8');

console.log('French Fátima translation updated successfully!');
