const Answer = require('../models/answer.models')

class AnswerServices {
    static async create(newAnswer){
        try {
            const result = await Answer.create(newAnswer);
        return result;
        } catch (error) {
            throw(error)
        }
    }
}
module.exports= AnswerServices;