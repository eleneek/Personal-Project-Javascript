import { subjects } from './SubjectsModel';

export class LMSModel {

    constructor() {
        this.subjects = new Set();
    }

    async add(id) {
        this.subjects.add(id);
    }

    async remove(id) {
        this.subjects.delete(id);
    }

    async verify(id) {
        return this.subjects.has(id);
    }

    async read(id) {
        return subjects.get(id);
    }

    async readAll() {
        return this.subjects.values().map(subjectId => ({ subjectId }));
    }

}
