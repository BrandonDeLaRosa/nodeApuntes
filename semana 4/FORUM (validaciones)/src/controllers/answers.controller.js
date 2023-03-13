const AnswerServices = require('../services/answer.service')

const getAllAnswers = async (req,res,next) => {
    try {
        const allAswers = await AnswerServices.getAll()
        res.status(201).json(allAswers)
    } catch (error) {
        next(error);  //TODO <--- Cualquier argumento que se le pase, sera de error
    }
}

const createAnswer = async (req,res,next) => {
    try {
        const newAnswer = req.body;
        const answer = await AnswerServices.create(newAnswer)
        res.status(201).json(answer)
    } catch (error) {
        next({
            status: 418,
            message: error.message,
            name: error.name
        });
    }
}

const updateAnswer= async (req,res,next) => {
    try {
        const {id} = req.params;
        const answerInfo = req.body;
        await AnswerServices.updating(id, answerInfo)
        res.status(204).send('Updated')
    } catch (error) {
        next(error);
    }
}

const deleteAnswer = async (req,res,next) => {
    try {
        const {id} = req.params;
        await AnswerServices.deletedAnswer(id)
        res.status(204).send('Deleted')
    } catch (error) {
        next(error);
    }
}

module.exports= {
    getAllAnswers,
    createAnswer,
    deleteAnswer,
    updateAnswer
}