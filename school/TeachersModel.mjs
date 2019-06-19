import {Validator} from  './validator.mjs'
export class TeachersModel {

    constructor() {
        this._teachers = new Map();
    }
    
    async add(teacher) {
        Validator.validate(teacher,teacherSchema)
        Validator.validate2(teacher)
        const id = '_' + Math.random().toString(16).substr(2, 9);
        this._teachers.set(id, teacher);
        return id
    }

    async read(id) {
        return { id, ...this._teachers.get(id) };
    }

    async update(id, teacher) {
        Validator.validate(teacher,teacherSchema)
        Validator.validate2(teacher)
        return this._teachers.set(id, teacher);
    }

    async remove(id) {
        this._teachers.delete(id);
    }

}


const teacherSchema = {
    "name": {
        "first": "string",
        "last": "string"
    },
    "image": "string",
    "dateOfBirth": "string", // format date
    "emails": [
        {
        "email": "string",
        "primary": "boolean"
        }
    ],
    "phones": [
        {
        "phone": "string",
        "primary": "boolean"
        }
    ],
    "sex": "string", // male or female
    "subjects": [
        {
        "subject": "string"
        }
    ],
    "description": "string",
  };