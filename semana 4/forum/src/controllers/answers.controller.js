const AnswerServices = require('../services/answer.service')

const getAllAnswers = async (req,res) => {
    try {
        const allAswers = await AnswerServices.getAll()
        res.status(201).json(allAswers)
    } catch (error) {
        res.status(400).json(error)
    }
}

const createAnswer = async (req,res) => {
    try {
        const newAnswer = req.body;
        const answer = await AnswerServices.create(newAnswer)
        res.status(201).json(answer)
    } catch (error) {
        res.status(400).json(error);
    }
}

const updateAnswer= async (req,res) => {
    try {
        const {id} = req.params;
        const answerInfo = req.body;
        await AnswerServices.updating(id, answerInfo)
        res.status(204).send('Updated')
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteAnswer = async (req,res) => {
    try {
        const {id} = req.params;
        await AnswerServices.deletedAnswer(id)
        res.status(204).send('Deleted')
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports= {
    getAllAnswers,
    createAnswer,
    deleteAnswer,
    updateAnswer
}