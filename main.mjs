import {
    SubjectsModel,
    LMSModel,
    TeachersModel,
    PupilsModel,
    GroupsModel,
    GradesbooksModel
} from './school/index.mjs';

const teacherSchema = { name: { first: 'elene', last: 'kvaratskhelia' }, image: "safhjevfbh", dateOfBirth: '10-03-2000',
    emails: [{ email: 'e.kvara@gmail.com', primary: true }],
    phones: [{ phone: '12314253564564', primary: false }],
    sex: 'female', subjects: [{ subject: 'English' }], description: 'string' 
};

const pupilSchema = { name: { first: 'elene', last: 'kvaratskhelia' }, image: "safhjevfbh", dateOfBirth: '10-03-2000',
    phones: [{ phone: '12314253564564', primary: false }],
    sex: 'female', description: 'string'
};

(async () => {
    const history = new SubjectsModel({
        title: 'History', lessons: 24, description:'123'
    });
    const biology = new SubjectsModel({
        title: 'Biology', lessons: 24, description:'123'
    });

    const LMS = new LMSModel();
    await LMS.add(history);
    await LMS.add(biology);

    const teacher = new TeachersModel();
    const teacherID = await teacher.add(teacherSchema);
    
    const pupil = new PupilsModel();
    const pupulId = await pupil.add(pupilSchema);
    
    const pupulId2 = await pupil.add(pupilSchema);
    
    const group = new GroupsModel(pupil);
    const groupID = await group.add(236);
    await group.addPupil(groupID, pupulId);

    const level = 1;
    const grade = await new GradesbooksModel(group, teacher, LMS);
    const gradebook = await grade.add(level, groupID);

    const record = { pupilId: pupulId, teacherId: teacherID, subjectId: history, lesson: 1, mark: 9 };
    const record2 = { pupilId: pupulId, teacherId: teacherID, subjectId: biology, lesson: 2, mark: 5 };
    const record3 = { pupilId: pupulId2, teacherId: teacherID, subjectId: biology, lesson: 2, mark: 5 };
    await grade.addRecord(gradebook, record);
    await grade.addRecord(gradebook, record2);
    await grade.addRecord(gradebook, record3);

    const oliver = await grade.read(gradebook, pupulId);
    const all = await grade.readAll(gradebook);
    console.log(all);
})()