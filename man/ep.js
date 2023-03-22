const { readdirSync, readFileSync, createWriteStream } = require('fs');
const csv = require('comma-separated-values');


const output = {
    header: ['ep','param','response'],
    body: [],
};
const endpoint = /<pre class="programlisting">((r|\/)[^#]+)<\/pre>/g;
const eparam = {
    begin: '<strong>パラメーター</strong>',
    end: '</table>',
};
const eres = {
    begin: '<strong>レスポンス</strong>',
    end: '<strong>使用例</strong>',
}

readdirSync('.').filter(file => file.endsWith('.html')).forEach(file => {
    const input = readFileSync(file, { encoding: 'utf-8' });

    const pbegin = input.indexOf(eparam.begin);
    const pend = input.indexOf(eparam.end, pbegin);
    let param = '';
    if (pbegin !== -1) {
        param = input.substring(pbegin, pend).replace(/,/g, '');
    }

    const rbegin = input.indexOf(eres.begin);
    const rend = input.indexOf(eres.end);
    let response = '';
    if (rbegin !== -1) {
        response = input.substring(rbegin, rend).replace(/,/g, '');
    }

    for (const [x, ep] of input.matchAll(endpoint)) {
        output.body.push([ep.replace(/[\r\n]+/g, ''), param, response]);
    }
});

createWriteStream('ep.csv', { encoding: 'utf-8' })
    .write(new csv(output.body, { header: output.header }).encode());