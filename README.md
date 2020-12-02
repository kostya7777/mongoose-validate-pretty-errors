# mongoose-validate-pretty-errors

The plugin for Mongoose that helps converts model validation errors to array of errors.
//turns duplicate errors into regular Mongoose validation errors.

[![npm version](https://img.shields.io/npm/v/mongoose-validate-pretty-errors.svg?style=flat-square)](https://www.npmjs.com/package/mongoose-validate-pretty-errors)
[![npm downloads](https://img.shields.io/npm/dm/mongoose-validate-pretty-errors.svg?style=flat-square)](https://www.npmjs.com/package/mongoose-validate-pretty-errors)
[![build status](https://img.shields.io/travis/matteodelabre/mongoose-validate-pretty-errors.svg?style=flat-square)](https://travis-ci.org/matteodelabre/mongoose-validate-pretty-errors)
[![dependencies status](http://img.shields.io/david/matteodelabre/mongoose-validate-pretty-errors.svg?style=flat-square)](https://david-dm.org/matteodelabre/mongoose-validate-pretty-errors)

Validation errors format:

```json
[
 {"name": "Field name", "message":  "Error message"}
]
```

## Install

```sh
npm install --save mongoose-validate-pretty-errors
```

### Supported versions of Mongoose

Starting from version 1.0.1, this module only supports Mongoose 4.2.8 and upper.

| This package’s version | Supported Mongoose versions |
| ----------------------:|:--------------------------- |
|                      1 | ≥ 4.2.8                    |

### Supported versions of Node

The module supports Node.js 4, 5, 6, 7 and 8. [fill a bug report!](https://github.com/kostya7777/mongoose-validate-pretty-errors/issues/new)

### Error validation message

```js
const prettyErrors = require('mongoose-validate-pretty-errors');
const userSchema = mongoose.Schema({});

userSchema.plugin(beautifyUnique);

const User = mongoose.model('Model', userSchema);

try {
    const user = await User.save();
} catch {
    return {__typename: "Errors", message: e.messages}
}
```

## License

Released under the MIT license. [See the full license text.](https://github.com/kostya7777/mongoose-validate-pretty-errors/blob/master/LICENSE)
