const Answer = require('../models/answer.models')

class AnswerServices {

    static async getAll(){
        try {
            const getlAllAnswers = await Answer.findAll();
            return getlAllAnswers;
        } catch (error) {
            throw(error)
        }
    }

    static async create(newAnswer){
        try {
            const result = await Answer.create(newAnswer);
        return result;
        } catch (error) {
            throw(error)
        }
    }

    static async updating(id,answerInfo){
        try {
            const updateAnswer = await Answer.update(answerInfo,{
                where:{id}
            });
            return updateAnswer
        } catch (error) {
            throw(error)
        }
    }

    static async deletedAnswer(id){
        try {
            const deleting = await Answer.destroy({
                where:{id}
            });
            return deleting;
        } catch (error) {
            throw(error)
        }
    }
}
module.exports= AnswerServices;