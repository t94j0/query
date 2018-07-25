# query
Parses query parameters into an object with keys of the query parameter keys and values of the query paramter values

# How to use
If you are using ES6 import/export syntax:

```
import parser from '@t94j0/queryparse';
const data = "?test=123&memes=here we go";
parser(data);

{ test: "123", memes: "here we go" }
```

If you are using RequireJS syntax:

```
const parser = require('@t94j0/queryparse');
const data = "?test=123&memes=here we go";
parser(data);

{ test: "123", memes: "here we go" }
```
