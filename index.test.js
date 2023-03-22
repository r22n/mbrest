const mbrest = require('.');
const FormData = require('form-data');
const fetch = require('node-fetch');
const { Blob } = require('node:buffer');
globalThis.FormData = FormData;
globalThis.Blob = Blob;
globalThis.fetch = fetch;

const endpoint = process.env.endpoint;

describe('test rest api', () => {
    it('throws errors', () => {
        expect(() => mbrest.default({ endpoint: 'wdwdwd', id: '', pw: '' })['rest/board/tree']({})).rejects.toThrow(mbrest.FetchError);
        expect(() => mbrest.default({ endpoint: '', id: '', pw: '' })['rest/board/tree']({})).rejects.toThrow(mbrest.FetchError);
        expect(() => mbrest.default({ endpoint, id: 'aaaaaa', pw: '' })['rest/board/tree']({})).rejects.toThrow(mbrest.RestError);
        expect(() => mbrest.default({ endpoint, id: '', pw: 'aaaaaa' })['rest/board/tree']({})).rejects.toThrow(mbrest.RestError);
        expect(() => mbrest.default({ endpoint, id: '', pw: '' })['rest/board/tree']({})).rejects.toThrow(mbrest.RestError);
        expect(() => mbrest.default({ endpoint, id: '', pw: '', tenant: '####' })['rest/board/tree']({})).rejects.toThrow(mbrest.RestError);
        expect(() => mbrest.default({ endpoint, id: 'admin', pw: 'adnub', tenant: 'system' })['rest/board/tree']({ depth: 'should be number' })).rejects.toThrow(mbrest.RestError);
    });
    it('api alives', async () => {
        const rest = mbrest.default({
            endpoint,
            id: 'admin', pw: 'admin',
            tenant: 'system',
        });
        // expect(await rest['rest/inmemolap/info']({})).toBeTruthy()
        // expect(await rest['rest/snapshot/delete']({})).toBeTruthy()
        expect(await rest['rest/directory/export/role']({})).toBeTruthy()
        // expect(await rest['rest/csv/put/shared']({})).toBeTruthy()
        // expect(await rest['rest/csv/get/shared']({})).toBeTruthy()
        // expect(await rest['rest/file/put/sharedfolder']({})).toBeTruthy()
        // expect(await rest['rest/directory/import/rolepermissionrelation']({})).toBeTruthy()
        // expect(await rest['rest/presummarize/task/exec']({})).toBeTruthy()
        // expect(await rest['rest/directory/import/user/startpage']({})).toBeTruthy()
        // expect(await rest['rest/snapshot/task/import/status']({})).toBeTruthy()
        // expect(await rest['rest/item/get/csv']({})).toBeTruthy()
        // expect(await rest['rest/directory/export/local/user']({})).toBeTruthy()
        // expect(await rest['rest/excel/get/board']({})).toBeTruthy()
        // expect(await rest['rest/excel/get/shared']({})).toBeTruthy()
        // expect(await rest['rest/tracking/data/upload/public']({})).toBeTruthy()
        // expect(await rest['rest/directory/import/named/user']({})).toBeTruthy()
        // expect(await rest['rest/inmemolap/task/exec']({})).toBeTruthy()
        // expect(await rest['rest/excel/put/shared']({})).toBeTruthy()
        // expect(await rest['rest/image/put/shared']({})).toBeTruthy()
        // expect(await rest['rest/excel/put/board']({})).toBeTruthy()
        // expect(await rest['rest/directory/import/user/profileimage']({})).toBeTruthy()
        // expect(await rest['rest/serverprogram/task/exec']({})).toBeTruthy()
        // expect(await rest['rest/item/get/json']({})).toBeTruthy()
        // expect(await rest['rest/rc/task/status']({})).toBeTruthy()
        // expect(await rest['rest/svf/task/status']({})).toBeTruthy()
        // expect(await rest['rest/tracking/data/upload/simple']({})).toBeTruthy()
        // expect(await rest['rest/directory/export/local/group']({})).toBeTruthy()
        // expect(await rest['rest/directory/import/local/grouprolerelation']({})).toBeTruthy()
        // expect(await rest['rest/snapshot/task/import/start/csv']({})).toBeTruthy()
        // expect(await rest['rest/directory/export/rolepermissionrelation']({})).toBeTruthy()
        // expect(await rest['rest/image/put/board']({})).toBeTruthy()
        // expect(await rest['rest/delete/editHistory']({})).toBeTruthy()
        expect(await rest['rest/directory/export/local/grouprolerelation']({})).toBeTruthy()
        // expect(await rest['rest/csv/put/board']({})).toBeTruthy()
        // expect(await rest['rest/chart/get/image']({})).toBeTruthy()
        // expect(await rest['rest/geo/get/image']({})).toBeTruthy()
        // expect(await rest['rest/delete/operation']({})).toBeTruthy()
        // expect(await rest['rest/directory/import/role']({})).toBeTruthy()
        // expect(await rest['rest/csv/get/board']({})).toBeTruthy()
        // expect(await rest['rest/rc/task/start']({})).toBeTruthy()
        // expect(await rest['rest/report/task/start']({})).toBeTruthy()
        // expect(await rest['rest/svf/task/start']({})).toBeTruthy()
        // expect(await rest['rest/board/get/image']({})).toBeTruthy()
        // expect(await rest['rest/snapshot/get/log']({})).toBeTruthy()
        expect(await rest['rest/board/tree']({})).toBeTruthy()
        // expect(await rest['rest/snapshot/task/exec']({})).toBeTruthy()
        // expect(await rest['rest/directory/import/local/groupuserrelation']({})).toBeTruthy()
        expect(await rest['rest/log/download']({ resturl: { logtype: 'common', file: 'aa.txt' } })).toBeTruthy()
        // expect(await rest['rest/directory/import/local/group']({})).toBeTruthy()
        // expect(await rest['rest/directory/import/local/user']({})).toBeTruthy()
        // expect(await rest['rest/snapshot/task/import/exec/csv']({})).toBeTruthy()
        // expect(await rest['rest/file/get/sharedfolder']({})).toBeTruthy()
        // expect(await rest['rest/killsession']({})).toBeTruthy()
        expect(await rest['rest/directory/export/local/groupuserrelation']({})).toBeTruthy()
        // expect(await rest['rest/model/task/exec']({})).toBeTruthy()
        // expect(await rest['rest/directory/import/permission']({})).toBeTruthy()

    });
});