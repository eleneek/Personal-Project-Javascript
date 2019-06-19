import {generateID} from './generateId'
class GroupsModel {

    constructor(pupil){
        this.groups = new Map();
        this.pupil = pupil;
    }

    checkvalidation(obj){
        if(typeof obj != "number") {
            throw new Error('Invalid Parameter!!!');
        }
    }

    newerror(id){
        if(!this.groups.has(id))
        throw new Error('There is no user with this id !');
    }

    iderror(){
        throw new Error('There is no such id !');
    }

    async add(room){
        this.checkvalidation(room);
        
        const id = generateID();
        this.groups.set(id, { room, students: new Set() });

        return id;
    }

    async read(id){
        this.newerror(id);

        return { id, ...this.groups.get(id) };
    }

    async remove(id){
        this.newerror(id);

        this.groups.delete(id);
    }

    async update(id, room){
        this.newerror(id);

        this.groups.set(id, room);
    }

    async readAll(){
        const result = [];
        this.groups.forEach(({...group}, id) => {
            group.students = Array.from(group.students);
            result.push({ id, ...group });
        });

        return result;
    }

    async addPupil(id, pupli){
        if(this.groups.has(id)) {
            this.groups.get(id).students.add(pupli);
        }
        else this.iderror();
    }

    async removePupil(id, pupli){
        if(this.groups.has(id)) {
            this.groups.get(id).students.delete(pupli);
        }
        else this.iderror();
    }
}

export { GroupsModel };