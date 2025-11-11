const Question = require('../models/Question');

exports.addQuestion = async (req, res) => {
  try {
    const questionData = req.body;
    let question = new Question(questionData);
    await question.save();
    res.status(201).send(question);
  } catch (error) {
    res.status(500).send('Error in Adding Question');
  }
};

exports.deleteQuestion = async (req, res) => {
  try {
    const questionId = req.params.id;
    let question = await Question.findByIdAndDelete(questionId);
    if (!question) {
      return res.status(404).send('Question not found');
    }
    res.status(200).send('Question Deleted');
  } catch (error) {
    res.status(500).send('Error in Deleting Question');
  }
};
