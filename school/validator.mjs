export class Validator {
    static validate(object,schema) {
        for (const key in schema) {
            if (schema.hasOwnProperty(key)) {
                const type = schema[key];
                if (object[key] === void 0) {
                    throw new Error(key);
                }
                if(Array.isArray(type)) {
                    this.validate(object[key], schema[key]);
                } else if (typeof type === 'object') {
                    this.validate(object[key], schema[key]);
                } else if (typeof type === 'string' || typeof type === 'boolean') {
                    if (typeof object[key] !== type) {
                        throw new Error(key);
                    }
                }
                
            }
        }
    }

    static validate2(object) {
        if (!Date.parse(object.dateOfBirth)) {
            throw new Error('date error');
        }

        if (object.sex !== 'male' && object.sex !== 'female') {
            throw new Error('sex error');
        }
    }
}