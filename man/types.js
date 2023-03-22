const { readFileSync, createWriteStream } = require('fs');
const csv = require('comma-separated-values');

const endpoints = new csv(readFileSync('ep.csv', { encoding: 'utf-8' }), { header: true, cellDelimiter: ',',  }).parse();
const output = createWriteStream('types.txt', { encoding: 'utf-8' });
const rescut = {
    begin: 'HTTPステータスコードが返ります。詳細は、次の一覧を参照してください。',
    end: '{"code":"エラーコード""message":"エラーメッセージ"}',
}

endpoints.forEach(({ param, ep, response }) => {
    const cutbegin = response.indexOf(rescut.begin);
    const cutend = response.indexOf(rescut.end, cutbegin);
    let res = response;
    if (cutbegin !== -1) {
        res = res.substring(0, cutbegin) + res.substring(cutend + rescut.end.length);
    }

    output.write(`'${ep}':\n${res}\t\t${param}\n`);
});
