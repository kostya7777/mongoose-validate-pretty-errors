module.exports = function (schema, options) {

    function errorHandle(err, doc, next) {
        if (!err.errors) {
            return next();
        }

        let errors = [];
        Object.keys(err.errors).forEach((key) => {
            let error = { name: key, message: err.errors[key].message};
            errors.push(error);
        });

        if (Array.isArray(errors)) {
            err.messages = errors;
        }
        next();
    }

    schema.post('save', errorHandle);
};