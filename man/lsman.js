const { readFileSync, createWriteStream } = require('fs');


const input = readFileSync('UUID-7ccbb966-cf69-51ba-1a17-02ff6f518713.html', { encoding: 'utf-8' });
const ouptut = createWriteStream('lsman.txt', { encoding: 'utf-8' });

const start = 'class="listitem"';
const urls = /UUID(-[a-z0-9]+)+\.html/g;

for (const [url] of input.substring(start).matchAll(urls)) {
    ouptut.write(`https://cs.wingarc.com/manual/mb/6.3/ja/${url}\n`);
}