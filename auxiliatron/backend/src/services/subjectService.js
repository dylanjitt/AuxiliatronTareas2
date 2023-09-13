const subjectRepository = require("../repositories/subjectRepository");
const logger = require('../utils/logger');

const getSubjectsService = async () => {
  try {
    logger.info("getSubjectsService - Fetching subjects from the database");
    const subjects = await subjectRepository.getSubjects();
    logger.info("getSubjectsService - Subjects fetched successfully!");
    return subjects;
  } catch (error) {
    logger.error("getSubjectsService - Error fetching subjects: ", error); // Agregar log en caso de error
    throw error;
  }
};

const getSubjectByIdService = async (id) => {
  try {
    logger.info(`getSubjectByIdService - Fetching subject by id from the database${id}`);
    const subject = await subjectRepository.getSubjectById(id);
    logger.info("getSubjectByIdService - Subject fetched successfully!");
    return subject;
  } catch (error) {
    logger.error(`getSubjectByIdService - Error fetching subject by id: ${id} `, error); // Agregar log en caso de error
    throw error;
  }
};

const createSubjectService = async (subject) => {
  try {
    logger.info(`createSubjectService - Creating subject from the database`);
    const subjects = await subjectRepository.createSubject(subject);
    logger.info("createSubjectService - Subject created successfully!");
    return subjects;
  } catch (error) {
    logger.error(`createSubjectService - Error Creating subject: `, error); // Agregar log en caso de error
    throw error;
  }
};

const updateSubjectService = async (id,body) => {
  try {
    logger.info(`updateSubjectService - Updating subject from the database${id}`);
    const subjects = await subjectRepository.updateSubject(id,body);
    logger.info("updateSubjectService - Subject updated successfully!");
    return subjects;
  } catch (error) {
    logger.error(`updateSubjectService - Error updating subject by id: ${id} `, error); // Agregar log en caso de error
    throw error;
  }
};

const deleteSubjectService = async (id) => {
  try {
    logger.info(`deleteSubjectService - Deleting subject from the database${id}`);
    const subjects = await subjectRepository.deleteSubject(id);
    logger.info("deleteSubjectService - Subject deleted successfully!");
    return subjects;
  } catch (error) {
    logger.error(`deleteSubjectService - Error deleting subject by id: ${id} `, error); // Agregar log en caso de error
    throw error;
  }
};

module.exports.getSubjectsService = getSubjectsService;
module.exports.getSubjectByIdService = getSubjectByIdService;
module.exports.createSubjectService = createSubjectService;
module.exports.updateSubjectService = updateSubjectService;
module.exports.deleteSubjectService = deleteSubjectService;
