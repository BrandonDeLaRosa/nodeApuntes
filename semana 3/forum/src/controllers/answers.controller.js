const AnswerServices = require('../services/answer.service')

const createAnswer = async (req,res) => {
    try {
        const newAnswer = req.body;
        const answer = await AnswerService.create(newAnswer)
        res.status(201).json(answer)
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports= {
    createAnswer
}