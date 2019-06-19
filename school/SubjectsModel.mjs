import { Validator } from  './validator'
import {generateID} from './generateId'

class SubjectsModel {

    constructor(subject) {
        
        Validator.validate(subject, schema);

        this.id = generateID()

        subjects.set(this.id, subject);

        return this.id;
    }

}
 
const subjects = new Map();

const schema =  {
    title: 'string',
    lessons: 'number',
    description: 'string'
};


export { subjects, SubjectsModel };