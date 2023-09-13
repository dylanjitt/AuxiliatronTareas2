const knex = require("knex");
const pgConnection = require("../config/knex-pg");
const db = knex(pgConnection.development);
const logger=require("../utils/logger")


const SUBJECT_TABLE = 'subjects';

const getSubjects = async () => {
  try {
    const subject = await db(SUBJECT_TABLE).select("*");
    logger.info('getSubjects response',subject)
    const subjectJson = subject.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    logger.info('subject JSON',subjectJson)
    return subjectJson;
  } catch (e) {
    logger.error('SUBJECT ERROR',e.message);
    return e;
  }
};

const getSubjectById = async (id) => {
  try {
    const subject = await db(SUBJECT_TABLE).select("*").where('id',id);
    logger.info('getSubjectById response',subject)
    const subjectJson = subject.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    logger.info('subjectById JSON',subjectJson)
    return subjectJson;
  } catch (e) {
    logger.error('SUBJECT-ID ERROR',e.message);
    return e;
  }
};

const createSubject = async (subject) => {
  try {
    const subjectResponse = await db(SUBJECT_TABLE).insert(subject).select("*");
    logger.info('createSubject response',subjectResponse)
    const subjectJson = subjectResponse.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    logger.info('createSubject JSON',subjectJson)
    return subjectJson;
  } catch (e) {
    logger.error('CREATE-SUBJECT ERROR',e.message);
    return e;
  }
};

const updateSubject = async (id,body) => {
  try {
    const subjectResponse = await db(SUBJECT_TABLE).where('id',id).update(body);
    logger.info('updateSubject response',subjectResponse)
    const subjectJson = subjectResponse.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    logger.info('updateSubject JSON',subjectJson)
    return subjectJson;
  } catch (e) {
    logger.error('UPDATE-SUBJECT ERROR',e.message);
    return e;
  }
};

const deleteSubject = async (id) => {
  try {
    const subjectResponse = await db(SUBJECT_TABLE).where('id',id).del();
    logger.info('deleteSubject response',subjectResponse)
    const subjectJson = subjectResponse.map((row) => ({
      id: row.id,
      name: row.name,
      description: row.description,
      credits: row.credits,
      professor: row.professor,
    }));
    logger.info('deleteSubject JSON',subjectJson)
    return subjectJson;
  } catch (e) {
    logger.error('DELETE-SUBJECT ERROR',e.message);
    return e;
  }
};

module.exports.getSubjects = getSubjects;
module.exports.getSubjectById = getSubjectById;
module.exports.createSubject = createSubject;
module.exports.updateSubject = updateSubject;
module.exports.deleteSubject = deleteSubject;
