import {Validator} from  './validator'
import {generateID} from './generateId'
import {teacherSchema} from './schemas/teacherSchema'

class TeachersModel {

    constructor() {
        this._teachers = new Map();
    }
    
    async add(teacher) {
        Validator.validate(teacher,teacherSchema)
        const id = generateID();
        this._teachers.set(id, teacher);
        return id
    }

    async read(id) {
        return { id, ...this._teachers.get(id) };
    }

    async update(id, teacher) {
        Validator.validate(teacher,teacherSchema,true)
        return this._teachers.set(id, teacher);
    }

    async remove(id) {
        this._teachers.delete(id);
    }

}

export {TeachersModel}