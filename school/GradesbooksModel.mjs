class GradesbooksModel {

    constructor(groups, teachers, LMS) {
        this.gradeBook = new Map()
        this.groups = groups;
        this.teachers = teachers;
        this.LMS = LMS;
    }

    async add(level, groupID) {
        const id = Symbol();
        this.gradeBook.set( id, { level, groupID, records: [] });
        
        return id;
    }

    async clear() {
        return this.gradeBook.clear();
    }

    async addRecord(id, record) {
        this.gradeBook.get(id).records.push( record );
    }

    async read(id, pupil) {
        const records = this.gradeBook.get(id).records.filter(record => record.pupilId === pupil);
        const { name: { first, last } } = await this.groups.pupil.read(records[0].pupilId);
        const result = { name: `${first} ${last}`, records: [] };

        for (const { teacherId, subjectId, lesson, mark } of records) {
            const { name: { first, last } } = await this.teachers.read(teacherId);
            const { title: subject } = await this.LMS.read(subjectId.id);
            result.records.push({ teacher: `${first} ${last}`, subject, lesson, mark });
        }

        return result;
    }

    async readAll(id){
        const records = this.gradeBook.get(id).records;
        const result = new Map();

        for (const { pupilId, teacherId, subjectId, lesson, mark } of records) {
            
            if (!result.has(pupilId)) {
                const { name: { first, last } } = await this.groups.pupil.read(records[0].pupilId);
                result.set(pupilId, { name: `${first} ${last}`, records: [] });
            }

            const { name: { first, last } } = await this.teachers.read(teacherId);
            const { title: subject } = await this.LMS.read(subjectId.id);
            result.get(pupilId).records.push({ teacher: `${first} ${last}`, subject, lesson, mark });        
        
        }

        return Array.from(result.values());
    }

}

export { GradesbooksModel };