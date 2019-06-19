export class Validator {
    static validate(object, schema, update = false) {
        for (const key in schema) {
            if (schema.hasOwnProperty(key)) {
                const type = schema[key];

                if (type === 'date') {
                    if (update && object[key] === void 0) { continue;  }
                    if (update) {
                        if(object[key] !== void 0) {
                            if (!Date.parse(object[key])) {
                                throw new Error('date error');
                            }
                        }
                    } else {
                        if (!Date.parse(object[key])) {
                            throw new Error('date error');
                        }
                    }
                    continue;
                }

                if (!update && object[key] === void 0) {
                    throw new Error(key);
                }
                if(Array.isArray(type)) {
                    let primary = 0;
                    object[key].forEach(element => {
                        if (primary >= 1) { throw new Error('second primary'); }
                        if (element.primary === true) { primary++; }
                        this.validate(element, schema[key][0]);
                    });
                } else if (typeof type === 'object') {
                    this.validate(object[key], schema[key], update);
                } else if (typeof type === 'string' || typeof type === 'boolean') {
                    if (typeof object[key] !== type && !update) {
                        throw new Error(key);
                    }
                }
            }
        }
    }
}