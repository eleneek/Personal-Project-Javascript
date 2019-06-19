import {Validator} from  './validator.mjs'
export class PupilsModel {

    constructor() {
        this.pupils = new Map();
    }
    
    async add(pupil) {
        Validator.validate(pupil,pupilsSchema)
        Validator.validate2(pupil)
        const id = '_' + Math.random().toString(16).substr(2, 9);
        this.pupils.set(id, pupil);
                
        return id
    }

    async read(id) {
        return { id, ...this.pupils.get(id) };
    }

    async update(id, pupil) {
        Validator.validate(pupil,pupilsSchema)
        Validator.validate2(pupil)
        return this.pupils.set(id, pupil);
    }

    async remove(id) {
        this.pupils.delete(id);
    }

}


const pupilsSchema = {
    "name": {
      "first": "string",
      "last": "string"
    },
    "image": "string",
    "dateOfBirth": "string", // format date
    "phones": [
      {
        "phone": "string",
        "primary": "boolean"
      }
    ],
    "sex": "string", // male OR female
    "description": "string"
  }