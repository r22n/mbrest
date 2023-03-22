
export type CommonArg = {
    endpoint: string;
    tenant?: string;
    id: string;
    pw: string;
    lc?: string;
    dv?: { [dv in string]: string | number };
};

export type REST = {
    'rest/inmemolap/info': (param: {
        clusterName: string; tableNamestring: string;
    }) => Promise<{
        cluster: { useMemory: string; name: string; maxMemory: string; };
        table: { useMemory: string; lastModifiedDate: string; recordCount: string; name: string; },
        column: { [name in string]: 'NUMBER' | 'STRING'; };
    }>;
    'rest/snapshot/delete': (param: {
        resturl: string;
    }) => Promise<void>;
    'rest/directory/export/role': (param: {
        header?: boolean; encoding?: ENCODING;
    }) => Promise<string>;
    'rest/csv/put/shared': (param: {
        resturl: string;
        overwrite?: boolean; uploadFile: Blob;
    }) => Promise<void>;
    'rest/csv/get/shared': (param: {
        resturl: string;
    }) => Promise<string>;
    'rest/file/put/sharedfolder': (param: {
        resturl: string;
        updateMode?: 'overwrite' | 'error' | 'skip'; uploadFile: Blob; encoding?: ENCODING;
    }) => Promise<void>;
    'rest/directory/import/rolepermissionrelation': (param: {
        uploadFile: Blob; encoding?: ENCODING; separator?: string; enquote?: string; startpos?: number;
    }) => Promise<void>;
    'rest/presummarize/task/exec': (param: {
        resturl: string;
    }) => Promise<void>;
    'rest/directory/import/user/startpage': (param: {
        uploadFile: Blob; encoding: ENCODING; header?: boolean; target?: 'pc' | 'mobile' | 'all'; transaction?: 'all' | 'line';
    }) => Promise<void>;
    'rest/snapshot/task/import/status': (param: {
        resturl: string;
        asyncWaitTime?: number;
    }) => Promise<
        { status: 'running' | 'success' | 'notfound' } |
        { status: 'fail', statusCode: string; errorCode: string; errorMsg: string; }
    >;
    'rest/item/get/csv': (param:
        { boardPath: string; itemName: string; cv?: { [cv in string]: string }; dv?: { [dv in string]: string | number }; readCount?: number; maxRows?: number; context?: 'flat' | 'flatItem' | 'ag' | 'crossTable'; useSummaryFormat?: boolean; encoding?: ENCODING; ac?: string; acv?: { [acv in string]: string }; } |
        { boardPath: string; itemId: string; cv?: { [cv in string]: string }; dv?: { [dv in string]: string | number }; readCount?: number; maxRows?: number; context?: 'flat' | 'flatItem' | 'ag' | 'crossTable'; useSummaryFormat?: boolean; encoding?: ENCODING; ac?: string; acv?: { [acv in string]: string }; }
    ) => Promise<string>;
    'rest/directory/export/local/user': (param: {
        header?: boolean; encoding?: ENCODING; domain?: string;
    }) => Promise<string>;
    'rest/excel/get/board': (param: {
        resturl: string;
    }) => Promise<Blob>;
    'rest/excel/get/shared': (param: {
        resturl: string;
    }) => Promise<Blob>;
    'rest/tracking/data/upload/public': (param: {
        uploadFile: Blob; id: string; authkey?: string; name?: string;
    }) => Promise<{
        protocol: string;
        msg: { time: string; loginId: string; name: string; text: string; send: string; read: string; }[];
        template: {
            name: string;
            version: string;
            sensor: {
                runWithBattery: string;
                gps: {
                    ac: {
                        accuracy: string;
                        distance: string;
                    };
                    battery: {
                        accuracy: string;
                        distance: string;
                    };
                    filter: {
                        min: string;
                        max: string;
                    }
                };
                acceleration: {
                    ac: {
                        interval: string;
                        threshold: string;
                    };
                    battery: {
                        interval: string;
                        threshold: string;
                    }
                },
                gyro: {
                    ac: { interval: string; };
                    battery: { interval: string; };
                },
                compass: {
                    ac: { degrees: string; };
                    battery: { degrees: string; };
                }
            };
            switch: string;
            status: { gp: string; name: string; type: string; dataType: string; values: string[]; default: string; note: string; }[];
            sendAlways: string;
            sendInterval: string;
            autoOff: string;
        };
    }>;
    'rest/directory/import/named/user': (param: {
        uploadFile: Blob; encoding?: ENCODING; separator?: string; enquote?: string; startpos?: number; command: 'add' | 'update' | 'delete' | 'add,update'
    }) => Promise<void>;
    'rest/inmemolap/task/exec': (param: {
        resturl: string;
    }) => Promise<void>;
    'rest/excel/put/shared': (param: {
        resturl: string;
        overwrite?: boolean; uploadFile: Blob;
    }) => Promise<void>;
    'rest/image/put/shared': (param: {
        resturl: string;
        updateMode?: 'overwrite' | 'error' | 'skip'; uploadFile: Blob; encoding?: ENCODING;
    }) => Promise<void>;
    'rest/excel/put/board': (param: {
        resturl: string;
        overwrite?: boolean; uploadFile: Blob;
    }) => Promise<void>;
    'rest/directory/import/user/profileimage': (param: {
        uploadFile: Blob; filename: string; userid: string;
    }) => Promise<void>;
    'rest/serverprogram/task/exec': (param: {
        resturl: string;
    }) => Promise<void>;
    'rest/item/get/json': (param:
        { boardPath: string; itemName: string; cv?: { [cv in string]: string | number }; dv?: { [dv in string]: string | number }; readCount?: number; maxRows?: number; context?: 'flat' | 'flatItem' | 'ag' | 'crossTable'; useSummaryFormat?: boolean; jsonFormat?: 'array' | 'object'; ac?: string; acv?: { [acv in string]: string }; } |
        { boardPath: string; itemId: string; cv?: { [cv in string]: string | number }; dv?: { [dv in string]: string | number }; readCount?: number; maxRows?: number; context?: 'flat' | 'flatItem' | 'ag' | 'crossTable'; useSummaryFormat?: boolean; jsonFormat?: 'array' | 'object'; ac?: string; acv?: { [acv in string]: string }; }
    ) => Promise<
        {
            header: string[];
            data: string[][];
        } |
        { [name in string]: string | number }[]
    >;
    'rest/rc/task/status': (param: {
        resturl: string;
    }) => Promise<
        { code: '1', status: 'init' } |
        { code: '2', status: 'started' } |
        { code: '4', status: 'completed' } |
        { code: '8', status: 'failed' } |
        { code: '16', status: 'expired' } |
        { code: '0', status: 'unknown' }
    >;
    'rest/svf/task/status': (param: {
        resturl: string;
    }) => Promise<
        { code: '1', status: 'init' } |
        { code: '2', status: 'started' } |
        { code: '4', status: 'completed' } |
        { code: '8', status: 'failed' } |
        { code: '16', status: 'expired' } |
        { code: '0', status: 'unknown' }
    >;
    'rest/tracking/data/upload/simple': (param: {
        template?: string; id: string; authkey?: string; name?: string; enabled?: boolean; time?: number; uptime?: number; lat?: number; lon?: number; address?: string; accuracy?: number; retry?: boolean; status?: string | number | boolean; msg?: string;
    }) => Promise<
        { code: '1', status: 'init' } |
        { code: '2', status: 'started' } |
        { code: '4', status: 'completed' } |
        { code: '8', status: 'failed' } |
        { code: '16', status: 'expired' } |
        { code: '0', status: 'unknown' }
    >;
    'rest/directory/export/local/group': (param: {
        header?: boolean; encoding?: ENCODING; domain?: string;
    }) => Promise<string>;
    'rest/directory/import/local/grouprolerelation': (param: {
        uploadFile: Blob; encoding?: ENCODING; separator?: string; enquote?: string; startpos?: number; domain?: string;
    }) => Promise<void>;
    'rest/snapshot/task/import/start/csv': (param: {
        resturl: string;
        uploadFile: Blob;
    }) => Promise<string>;
    'rest/directory/export/rolepermissionrelation': (param: {
        header?: boolean; encoding?: ENCODING;
    }) => Promise<string>;
    'rest/image/put/board': (param: {
        resturl: string;
        updateMode?: 'overwrite' | 'error' | 'skip'; uploadFile: Blob; encoding?: ENCODING;
    }) => Promise<void>;
    'rest/delete/editHistory': (param:
        { dirPath: string; } |
        { boardPath: string; }
    ) => Promise<void>;
    'rest/directory/export/local/grouprolerelation': (param: {
        header?: boolean; encoding?: ENCODING; domain?: string;
    }) => Promise<string>;
    'rest/csv/put/board': (param: {
        resturl: string;
        overwrite?: boolean; uploadFile: Blob;
    }) => Promise<void>;
    'rest/chart/get/image': (param:
        { boardpath: string; mbitem: string; width?: number; height?: number; fontfamily?: string; fontsize?: number; isSpreadSizeAuto?: boolean; } |
        { mbid: string; mbitem: string; width?: number; height?: number; fontfamily?: string; fontsize?: number; isSpreadSizeAuto?: boolean; }
    ) => Promise<Blob>;
    'rest/geo/get/image': (param:
        { boardpath: string; mbitem: string; width?: number; height?: number; fontfamily?: string; fontsize?: number; isSpreadSizeAuto?: boolean; } |
        { mbid: string; mbitem: string; width?: number; height?: number; fontfamily?: string; fontsize?: number; isSpreadSizeAuto?: boolean; }
    ) => Promise<Blob>;
    'rest/delete/operation': (param:
        { targetId: string; dirPath: string; boardPath?: string; } |
        { targetAll: boolean; dirPath: string; boardPath?: string; }
    ) => Promise<void>;
    'rest/directory/import/role': (param: {
        uploadFile: Blob; encoding?: ENCODING; separator?: string; enquote?: string; startpos?: number; command: 'add' | 'update' | 'delete' | 'add,update'
    }) => Promise<void>;
    'rest/csv/get/board': (param: {
        resturl: string;
    }) => Promise<string>;
    'rest/rc/task/start': (param: {
        resturl: string;
    }) => Promise<{ jobid: string; }>;
    'rest/report/task/start': (param: {
        resturl: string;
    }) => Promise<{ jobid: string; }>;
    'rest/svf/task/start': (param: {
        resturl: string;
    }) => Promise<{ jobid: string; }>;
    'rest/board/get/image': (param: {
        boardPath: string; pageNo?: number; expirationSec?: number; timeoutSec?: number;
    }) => Promise<Blob>;
    'rest/snapshot/get/log': (param: {
        resturl: string;
    }) => Promise<string>;
    'rest/board/tree': (param: {
        path?: string; depth?: number; writableOnly?: boolean; dirOnly?: boolean;
    }) => Promise<FILE>;
    'rest/snapshot/task/exec': (param: {
        resturl: string;
    }) => Promise<void>;
    'rest/directory/import/local/groupuserrelation': (param: {
        uploadFile: Blob; encoding?: ENCODING; separator?: string; enquote?: string; startpos?: number; domain?: string;
    }) => Promise<void>;
    'rest/log/download': (param: {
        resturl: {
            logtype: 'common' | 'customer' | 'operation' | 'performance' | 'dataaccess';
            file: string;
        };
        logType?: 'common' | 'customer' | 'operation' | 'performance' | 'dataaccess';
        logLevel?: 'FATAL' | 'ERROR' | 'WARN' | 'INFO' | 'DEBUG' | 'TRACE';
        startDate?: string; endDate?: string;
    }) => Promise<string>;
    'rest/directory/import/local/group': (param: {
        uploadFile: Blob; encoding?: ENCODING; separator?: string; enquote?: string; startpos?: number; command: 'add' | 'update' | 'delete' | 'add,update'; domain?: string;
    }) => Promise<void>;
    'rest/directory/import/local/user': (param: {
        uploadFile: Blob; encoding?: ENCODING; separator?: string; enquote?: string; startpos?: number; command: 'add' | 'update' | 'delete' | 'add,update'; domain?: string;
    }) => Promise<void>;
    'rest/snapshot/task/import/exec/csv': (param: {
        uploadFile: Blob;
    }) => Promise<string>;
    'rest/file/get/sharedfolder': (param: {
        resturl: string;
    }) => Promise<Blob>;
    'rest/killsession': (param: {
        killSessionTarget: 'ALL' | 'PC' | 'MOBILE'; killSessionUserId?: string;
    }) => Promise<{ killcount: string; }>;
    'rest/directory/export/local/groupuserrelation': (param: {
        header?: boolean; encoding?: ENCODING; domain?: string;
    }) => Promise<string>;
    'rest/model/task/exec': (param: {
        resturl: string;
    }) => Promise<void>;
    'rest/directory/import/permission': (param: {
        uploadFile: Blob; command: 'add' | 'update' | 'delete' | 'add,update'; encoding?: ENCODING; startpos?: number; separator?: string; enquote?: string; domain?: string; target?: TOPDIR; createDir?: string;
    }) => Promise<void>;
};

export type ENCODING =
    'UTF-8' |
    'Shift-JIS' |
    'EUC-JP' |
    'GB18030' |
    'GBK' |
    'GB2312' |
    'MS936';

export type FILE = {
    path: string;
    name?: string;
    directories?: FILE[];
    files?: FILE[];
};

export type TOPDIR =
    'board' |
    'chart' |
    'spreadsheet' |
    'image' |
    'text' |
    'link' |
    'sharedfolder' |
    'bbs' |
    'bbsimage' |
    'bbsfile' |
    'menu' |
    'datasource' |
    'csvexcel' |
    'imagemap' |
    'geoitem' |
    'geolayer' |
    'geopath' |
    'svfreport' |
    'excelreport' |
    'powerpointreport';


export class RestError extends Error {
    readonly code: number;
    constructor(code: number, message: string) {
        super(`error on rest api: ${message}: code=${code}`);
        this.code = code;

    }
}

export class FetchError extends Error {
    constructor(message: string) {
        super(`error on fetch api: ${message}`);
    }
}

export default ({
    endpoint,
    dv,
    ...common
}: CommonArg): REST => {
    const com = { ...common, ...pref(dv, 'dv-') };

    return {
        'rest/inmemolap/info': param => json(`${endpoint}/rest/inmemolap/info`, { ...com, ...param }),
        'rest/snapshot/delete': ({ resturl, ...param }) => call(`${endpoint}/rest/snapshot/delete/${resturl}`, { ...com, ...param }),
        'rest/directory/export/role': param => text(`${endpoint}/rest/directory/export/role`, { ...com, ...param }),
        'rest/csv/put/shared': ({ resturl, ...param }) => call(`${endpoint}/rest/csv/put/shared/${resturl}`, { ...com, ...param }),
        'rest/csv/get/shared': param => text(`${endpoint}/rest/csv/get/shared`, { ...com, ...param }),
        'rest/file/put/sharedfolder': ({ resturl, ...param }) => call(`${endpoint}/rest/file/put/sharedfolder/${resturl}`, { ...com, ...param }),
        'rest/directory/import/rolepermissionrelation': param => call(`${endpoint}/rest/directory/import/rolepermissionrelation`, { ...com, ...param }),
        'rest/presummarize/task/exec': ({ resturl, ...param }) => call(`${endpoint}/rest/presummarize/task/exec/${resturl}`, { ...com, ...param }),
        'rest/directory/import/user/startpage': param => call(`${endpoint}/rest/directory/import/user/startpage`, { ...com, ...param }),
        'rest/snapshot/task/import/status': ({ resturl, ...param }) => json(`${endpoint}/rest/snapshot/task/import/status/${resturl}`, { ...com, ...param }),
        'rest/item/get/csv': ({ cv, dv, acv, ...param }) => text(`${endpoint}/rest/item/get/csv`, { ...com, ...param, ...pref(cv, 'cv-'), ...pref(dv, 'dv-'), ...pref(acv, 'acv-') }),
        'rest/directory/export/local/user': param => text(`${endpoint}/rest/directory/export/local/user`, { ...com, ...param }),
        'rest/excel/get/board': ({ resturl, ...param }) => blob(`${endpoint}/rest/excel/get/board/${resturl}`, { ...com, ...param }),
        'rest/excel/get/shared': ({ resturl, ...param }) => blob(`${endpoint}/rest/excel/get/shared/${resturl}`, { ...com, ...param }),
        'rest/tracking/data/upload/public': param => json(`${endpoint}/rest/tracking/data/upload/public`, { ...com, ...param }),
        'rest/directory/import/named/user': param => call(`${endpoint}/rest/directory/import/named/user`, { ...com, ...param }),
        'rest/inmemolap/task/exec': ({ resturl, ...param }) => call(`${endpoint}/rest/inmemolap/task/exec/${resturl}`, { ...com, ...param }),
        'rest/excel/put/shared': ({ resturl, ...param }) => call(`${endpoint}/rest/excel/put/shared/${resturl}`, { ...com, ...param }),
        'rest/image/put/shared': ({ resturl, ...param }) => call(`${endpoint}/rest/image/put/shared/${resturl}`, { ...com, ...param }),
        'rest/excel/put/board': ({ resturl, ...param }) => call(`${endpoint}/rest/excel/put/board/${resturl}`, { ...com, ...param }),
        'rest/directory/import/user/profileimage': param => call(`${endpoint}/rest/directory/import/user/profileimage`, { ...com, ...param }),
        'rest/serverprogram/task/exec': ({ resturl, ...param }) => call(`${endpoint}/rest/serverprogram/task/exec/${resturl}`, { ...com, ...param }),
        'rest/item/get/json': ({ cv, dv, acv, ...param }) => json(`${endpoint}/rest/item/get/json`, { ...com, ...param, ...pref(cv, 'cv-'), ...pref(dv, 'dv-'), ...pref(acv, 'acv-') }),
        'rest/rc/task/status': ({ resturl, ...param }) => json(`${endpoint}/rest/rc/task/status/${resturl}`, { ...com, ...param }),
        'rest/svf/task/status': ({ resturl, ...param }) => json(`${endpoint}/rest/svf/task/status/${resturl}`, { ...com, ...param }),
        'rest/tracking/data/upload/simple': param => json(`${endpoint}/rest/tracking/data/upload/simple`, { ...com, ...param }),
        'rest/directory/export/local/group': param => text(`${endpoint}/rest/directory/export/local/group`, { ...com, ...param }),
        'rest/directory/import/local/grouprolerelation': param => call(`${endpoint}/rest/directory/import/local/grouprolerelation`, { ...com, ...param }),
        'rest/snapshot/task/import/start/csv': ({ resturl, ...param }) => text(`${endpoint}/rest/snapshot/task/import/start/csv/${resturl}`, { ...com, ...param }),
        'rest/directory/export/rolepermissionrelation': param => text(`${endpoint}/rest/directory/export/rolepermissionrelation`, { ...com, ...param }),
        'rest/image/put/board': ({ resturl, ...param }) => call(`${endpoint}/rest/image/put/board/${resturl}`, { ...com, ...param }),
        'rest/delete/editHistory': param => call(`${endpoint}/rest/delete/editHistory`, { ...com, ...param }),
        'rest/directory/export/local/grouprolerelation': param => text(`${endpoint}/rest/directory/export/local/grouprolerelation`, { ...com, ...param }),
        'rest/csv/put/board': ({ resturl, ...param }) => call(`${endpoint}/rest/csv/put/board/${resturl}`, { ...com, ...param }),
        'rest/chart/get/image': param => blob(`${endpoint}/rest/chart/get/image`, { ...com, ...param }),
        'rest/geo/get/image': param => blob(`${endpoint}/rest/geo/get/image`, { ...com, ...param }),
        'rest/delete/operation': param => call(`${endpoint}/rest/delete/operation`, { ...com, ...param }),
        'rest/directory/import/role': param => call(`${endpoint}/rest/directory/import/role`, { ...com, ...param }),
        'rest/csv/get/board': ({ resturl, ...param }) => text(`${endpoint}/rest/csv/get/board/${resturl}`, { ...com, ...param }),
        'rest/rc/task/start': ({ resturl, ...param }) => json(`${endpoint}/rest/rc/task/start/${resturl}`, { ...com, ...param }),
        'rest/report/task/start': ({ resturl, ...param }) => json(`${endpoint}/rest/report/task/start/${resturl}`, { ...com, ...param }),
        'rest/svf/task/start': ({ resturl, ...param }) => json(`${endpoint}/rest/svf/task/start/${resturl}`, { ...com, ...param }),
        'rest/board/get/image': param => blob(`${endpoint}/rest/board/get/image`, { ...com, ...param }),
        'rest/snapshot/get/log': ({ resturl, ...param }) => text(`${endpoint}/rest/snapshot/get/log/${resturl}`, { ...com, ...param }),
        'rest/board/tree': param => json(`${endpoint}/rest/board/tree`, { ...com, ...param }),
        'rest/snapshot/task/exec': ({ resturl, ...param }) => call(`${endpoint}/rest/snapshot/task/exec/${resturl}`, { ...com, ...param }),
        'rest/directory/import/local/groupuserrelation': param => call(`${endpoint}/rest/directory/import/local/groupuserrelation`, { ...com, ...param }),
        'rest/log/download': ({ resturl: { logtype, file }, ...param }) => text(`${endpoint}/rest/log/download/${logtype}/${file}`, { ...com, ...param }),
        'rest/directory/import/local/group': param => call(`${endpoint}/rest/directory/import/local/group`, { ...com, ...param }),
        'rest/directory/import/local/user': param => call(`${endpoint}/rest/directory/import/local/user`, { ...com, ...param }),
        'rest/snapshot/task/import/exec/csv': param => text(`${endpoint}/rest/snapshot/task/import/exec/csv`, { ...com, ...param }),
        'rest/file/get/sharedfolder': ({ resturl, ...param }) => blob(`${endpoint}/rest/file/get/sharedfolder/${resturl}`, { ...com, ...param }),
        'rest/killsession': param => json(`${endpoint}/rest/killsession`, { ...com, ...param }),
        'rest/directory/export/local/groupuserrelation': param => text(`${endpoint}/rest/directory/export/local/groupuserrelation`, { ...com, ...param }),
        'rest/model/task/exec': ({ resturl, ...param }) => call(`${endpoint}/rest/model/task/exec/${resturl}`, { ...com, ...param }),
        'rest/directory/import/permission': param => call(`${endpoint}/rest/directory/import/permission`, { ...com, ...param }),
    };
};

// helpers
const text = async (ep: string, post: object) => (await req(ep, post, r => Buffer.from(r).toString()));
const json = async (ep: string, post: object) => (await req(ep, post, r => JSON.parse(Buffer.from(r).toString())));
const blob = async (ep: string, post: object) => (await req(ep, post, r => new Blob([r])));
const call = async (ep: string, post: object) => { req(ep, post, () => { }); };

const req = async <T = string | object | Blob>(ep: string, post: object, get: (r: ArrayBuffer) => T) => {
    const body = new FormData();
    Object.entries(post).forEach(([field, value]) => body.append(field, value));

    let r: ArrayBuffer;
    try {
        const rs = await fetch(ep, { method: 'POST', body });
        r = await rs.arrayBuffer();
    } catch (e) {
        throw new FetchError(`${e}`);
    }

    let check;
    try {
        check = JSON.parse(Buffer.from(r).toString());
    } catch {
        // response body is the result data if not json.
        return get(r);
    }

    // check error object if json rpc tells error
    if ('code' in check && !(check.code === '200' || check.code === 200)) {
        throw new RestError(Number(check.code), check.message);
    }

    // formal json is result data
    return get(r);
};

const pref = <T>(v: { [name in string]: T } | undefined, pref: string) =>
    v ?
        Object.fromEntries(Object.entries(v).map(([field, value]) => [`${pref}${field}`, value])) :
        void 0;