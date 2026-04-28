const fs = require('fs');
const filePath = 'c:/Users/Atualize Guest/OneDrive/Desktop/prl2/src/components/Hero.tsx';
let content = fs.readFileSync(filePath, 'utf8');

const importStatement = "import React, { useState, useRef, useEffect } from 'react';\n";
if (!content.includes('import React')) {
    content = content.replace('export default function Hero() {', importStatement + 'export default function Hero() {');
}

const functionStart = content.indexOf('function HeroScene({ idPrefix }: { idPrefix: string }) {');

const newHeroScene = fs.readFileSync('c:/Users/Atualize Guest/OneDrive/Desktop/prl2/newHeroScene.txt', 'utf8');

content = content.substring(0, functionStart) + newHeroScene;
fs.writeFileSync(filePath, content);
console.log('HeroScene replaced successfully!');
