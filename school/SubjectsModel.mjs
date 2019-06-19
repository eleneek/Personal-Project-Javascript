import { Validator } from  './validator.mjs'

class SubjectsModel {

    constructor(subject) {
        
        Validator.validate(subject, schema);

        this.id = '_' + Math.random().toString(36).substr(2, 9);

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