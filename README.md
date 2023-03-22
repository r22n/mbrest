# mbrest
rest api wrapper supports typescript language for motionboard 6.3

## how to start

```

import mbrest from 'mbrest';

// configure endpoint and user
const rest = mbrest({
    endpoint: 'http[s]://xxxx/motionboard',
    id: 'userid',
    pw: 'password',
});

// rest[$pathname]({$param}) returns promise.
// $param will extends common param on configured
rest['rest/board/tree']({ path: '/xxx/sample' }).then(files => {
    // result here.
});

```