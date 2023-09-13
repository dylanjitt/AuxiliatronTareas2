const logger = require('../utils/logger');
const subjectsService = require('../services/subjectService');


const getSubjectController = async (req, res) => {
    logger.info('getSubjectController - Req', req);
    try {
        const subjects = await subjectsService.getSubjectsService();
        return res.status(200).json({
            success: true,
            message: 'Subject retrieved successfully',
            data: subjects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subject',
            error: error.message
        })
    }

};

const getSubjectByIdController = async (req, res) => {
    logger.info('getSubjectByIdController - Req', req);
    const { params } = req;
    logger.info('getSubjectByIdController - Params', params);
    const { id } = params
    logger.info('getSubjectByIdController - Id', id);
    try {
        const subject = await subjectsService.getSubjectByIdService(id);
        return res.status(200).json({
            success: true,
            message: 'Subject by id retrieved successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error retrieving subjects',
            error: error.message
        })
    }

};

const postSubjectController = async (req, res) => {
    logger.info('postSubjectController - Req', req);
    const { body } = req;
    logger.info('postSubjectController - Body', body);
    //const { subject } = params
    //logger.info('postSubjectController - Subject', subject);
    try {
        const subject = await subjectsService.createSubjectService(body);
        return res.status(200).json({
            success: true,
            message: 'Subject created successfully',
            data: subject
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error creating subject',
            error: error.message
        })
    }

};
//TODO: updating contnent
const putSubjectController = async (req, res) => {
    logger.info('putSubjectController - Req', req);
    const {body,params}=req
    logger.info('getSubjectByIdController - Params', params);
    const { id } = params
    logger.info('getSubjectByIdController - Id', id);
    //const { id} = body
    logger.info('getSubjectByIdController - Id', id);

    try {
        const subjects = await subjectsService.updateSubjectService(id,body);
        return res.status(200).json({
            success: true,
            message: 'Subject updated successfully',
            data: subjects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error updating subject',
            error: error.message
        })
    }

};

const deleteSubjectController = async (req, res) => {
    logger.info('deleteSubjectController - Req', req);
    const { params } = req;
    logger.info('deleteSubjectController - Params', params);
    const { id } = params
    logger.info('deleteSubjectController - Id', id);

    try {
        const subjects = await subjectsService.deleteSubjectService(id);
        return res.status(200).json({
            success: true,
            message: 'Subject deleted successfully',
            data: subjects
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: 'Error deleting subject',
            error: error.message
        })
    }

};


module.exports = { getSubjectController, getSubjectByIdController, postSubjectController, putSubjectController, deleteSubjectController }