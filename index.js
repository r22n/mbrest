"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchError = exports.RestError = void 0;
class RestError extends Error {
    constructor(code, message) {
        super(`error on rest api: ${message}: code=${code}`);
        this.code = code;
    }
}
exports.RestError = RestError;
class FetchError extends Error {
    constructor(message) {
        super(`error on fetch api: ${message}`);
    }
}
exports.FetchError = FetchError;
exports.default = (_a) => {
    var { endpoint, dv } = _a, common = __rest(_a, ["endpoint", "dv"]);
    const com = Object.assign(Object.assign({}, common), pref(dv, 'dv-'));
    return {
        'rest/inmemolap/info': param => json(`${endpoint}/rest/inmemolap/info`, Object.assign(Object.assign({}, com), param)),
        'rest/snapshot/delete': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/snapshot/delete/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/directory/export/role': param => text(`${endpoint}/rest/directory/export/role`, Object.assign(Object.assign({}, com), param)),
        'rest/csv/put/shared': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/csv/put/shared/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/csv/get/shared': param => text(`${endpoint}/rest/csv/get/shared`, Object.assign(Object.assign({}, com), param)),
        'rest/file/put/sharedfolder': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/file/put/sharedfolder/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/directory/import/rolepermissionrelation': param => call(`${endpoint}/rest/directory/import/rolepermissionrelation`, Object.assign(Object.assign({}, com), param)),
        'rest/presummarize/task/exec': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/presummarize/task/exec/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/directory/import/user/startpage': param => call(`${endpoint}/rest/directory/import/user/startpage`, Object.assign(Object.assign({}, com), param)),
        'rest/snapshot/task/import/status': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return json(`${endpoint}/rest/snapshot/task/import/status/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/item/get/csv': (_a) => {
            var { cv, dv, acv } = _a, param = __rest(_a, ["cv", "dv", "acv"]);
            return text(`${endpoint}/rest/item/get/csv`, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, com), param), pref(cv, 'cv-')), pref(dv, 'dv-')), pref(acv, 'acv-')));
        },
        'rest/directory/export/local/user': param => text(`${endpoint}/rest/directory/export/local/user`, Object.assign(Object.assign({}, com), param)),
        'rest/excel/get/board': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return blob(`${endpoint}/rest/excel/get/board/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/excel/get/shared': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return blob(`${endpoint}/rest/excel/get/shared/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/tracking/data/upload/public': param => json(`${endpoint}/rest/tracking/data/upload/public`, Object.assign(Object.assign({}, com), param)),
        'rest/directory/import/named/user': param => call(`${endpoint}/rest/directory/import/named/user`, Object.assign(Object.assign({}, com), param)),
        'rest/inmemolap/task/exec': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/inmemolap/task/exec/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/excel/put/shared': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/excel/put/shared/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/image/put/shared': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/image/put/shared/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/excel/put/board': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/excel/put/board/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/directory/import/user/profileimage': param => call(`${endpoint}/rest/directory/import/user/profileimage`, Object.assign(Object.assign({}, com), param)),
        'rest/serverprogram/task/exec': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/serverprogram/task/exec/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/item/get/json': (_a) => {
            var { cv, dv, acv } = _a, param = __rest(_a, ["cv", "dv", "acv"]);
            return json(`${endpoint}/rest/item/get/json`, Object.assign(Object.assign(Object.assign(Object.assign(Object.assign({}, com), param), pref(cv, 'cv-')), pref(dv, 'dv-')), pref(acv, 'acv-')));
        },
        'rest/rc/task/status': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return json(`${endpoint}/rest/rc/task/status/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/svf/task/status': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return json(`${endpoint}/rest/svf/task/status/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/tracking/data/upload/simple': param => json(`${endpoint}/rest/tracking/data/upload/simple`, Object.assign(Object.assign({}, com), param)),
        'rest/directory/export/local/group': param => text(`${endpoint}/rest/directory/export/local/group`, Object.assign(Object.assign({}, com), param)),
        'rest/directory/import/local/grouprolerelation': param => call(`${endpoint}/rest/directory/import/local/grouprolerelation`, Object.assign(Object.assign({}, com), param)),
        'rest/snapshot/task/import/start/csv': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return text(`${endpoint}/rest/snapshot/task/import/start/csv/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/directory/export/rolepermissionrelation': param => text(`${endpoint}/rest/directory/export/rolepermissionrelation`, Object.assign(Object.assign({}, com), param)),
        'rest/image/put/board': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/image/put/board/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/delete/editHistory': param => call(`${endpoint}/rest/delete/editHistory`, Object.assign(Object.assign({}, com), param)),
        'rest/directory/export/local/grouprolerelation': param => text(`${endpoint}/rest/directory/export/local/grouprolerelation`, Object.assign(Object.assign({}, com), param)),
        'rest/csv/put/board': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/csv/put/board/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/chart/get/image': param => blob(`${endpoint}/rest/chart/get/image`, Object.assign(Object.assign({}, com), param)),
        'rest/geo/get/image': param => blob(`${endpoint}/rest/geo/get/image`, Object.assign(Object.assign({}, com), param)),
        'rest/delete/operation': param => call(`${endpoint}/rest/delete/operation`, Object.assign(Object.assign({}, com), param)),
        'rest/directory/import/role': param => call(`${endpoint}/rest/directory/import/role`, Object.assign(Object.assign({}, com), param)),
        'rest/csv/get/board': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return text(`${endpoint}/rest/csv/get/board/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/rc/task/start': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return json(`${endpoint}/rest/rc/task/start/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/report/task/start': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return json(`${endpoint}/rest/report/task/start/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/svf/task/start': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return json(`${endpoint}/rest/svf/task/start/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/board/get/image': param => blob(`${endpoint}/rest/board/get/image`, Object.assign(Object.assign({}, com), param)),
        'rest/snapshot/get/log': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return text(`${endpoint}/rest/snapshot/get/log/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/board/tree': param => json(`${endpoint}/rest/board/tree`, Object.assign(Object.assign({}, com), param)),
        'rest/snapshot/task/exec': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/snapshot/task/exec/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/directory/import/local/groupuserrelation': param => call(`${endpoint}/rest/directory/import/local/groupuserrelation`, Object.assign(Object.assign({}, com), param)),
        'rest/log/download': (_a) => {
            var { resturl: { logtype, file } } = _a, param = __rest(_a, ["resturl"]);
            return text(`${endpoint}/rest/log/download/${logtype}/${file}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/directory/import/local/group': param => call(`${endpoint}/rest/directory/import/local/group`, Object.assign(Object.assign({}, com), param)),
        'rest/directory/import/local/user': param => call(`${endpoint}/rest/directory/import/local/user`, Object.assign(Object.assign({}, com), param)),
        'rest/snapshot/task/import/exec/csv': param => text(`${endpoint}/rest/snapshot/task/import/exec/csv`, Object.assign(Object.assign({}, com), param)),
        'rest/file/get/sharedfolder': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return blob(`${endpoint}/rest/file/get/sharedfolder/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/killsession': param => json(`${endpoint}/rest/killsession`, Object.assign(Object.assign({}, com), param)),
        'rest/directory/export/local/groupuserrelation': param => text(`${endpoint}/rest/directory/export/local/groupuserrelation`, Object.assign(Object.assign({}, com), param)),
        'rest/model/task/exec': (_a) => {
            var { resturl } = _a, param = __rest(_a, ["resturl"]);
            return call(`${endpoint}/rest/model/task/exec/${resturl}`, Object.assign(Object.assign({}, com), param));
        },
        'rest/directory/import/permission': param => call(`${endpoint}/rest/directory/import/permission`, Object.assign(Object.assign({}, com), param)),
    };
};
// helpers
const text = (ep, post) => __awaiter(void 0, void 0, void 0, function* () { return (yield req(ep, post, r => Buffer.from(r).toString())); });
const json = (ep, post) => __awaiter(void 0, void 0, void 0, function* () { return (yield req(ep, post, r => JSON.parse(Buffer.from(r).toString()))); });
const blob = (ep, post) => __awaiter(void 0, void 0, void 0, function* () { return (yield req(ep, post, r => new Blob([r]))); });
const call = (ep, post) => __awaiter(void 0, void 0, void 0, function* () { req(ep, post, () => { }); });
const req = (ep, post, get) => __awaiter(void 0, void 0, void 0, function* () {
    const body = new FormData();
    Object.entries(post).forEach(([field, value]) => body.append(field, value));
    let r;
    try {
        const rs = yield fetch(ep, { method: 'POST', body });
        r = yield rs.arrayBuffer();
    }
    catch (e) {
        throw new FetchError(`${e}`);
    }
    let check;
    try {
        check = JSON.parse(Buffer.from(r).toString());
    }
    catch (_a) {
        // response body is the result data if not json.
        return get(r);
    }
    // check error object if json rpc tells error
    if ('code' in check && !(check.code === '200' || check.code === 200)) {
        throw new RestError(Number(check.code), check.message);
    }
    // formal json is result data
    return get(r);
});
const pref = (v, pref) => v ?
    Object.fromEntries(Object.entries(v).map(([field, value]) => [`${pref}${field}`, value])) :
    void 0;
