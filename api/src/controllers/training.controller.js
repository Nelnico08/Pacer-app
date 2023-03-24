const { Training } = require('../db')

const getTraining = async(req, res, next) => {
    try {
        const user_id = req.user_id

        const training = await Training.findOne({where: {userId: user_id}})

        if(!training) return res.status(200).json({ message: "Training not found" })

        return res.status(200).json({training})
    } catch (error) {
        next(error)
    }
}

const postTraining = async(req,res, next) => {
    try {
        const user_id = req.user_id
        const { training } = req.body // training = { easy: 05:30, aerobic: 04:50 - 5:05.... }

        await Training.update( training, { where: { userId: user_id}});

        res.status(201).send("Post success")
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getTraining,
    postTraining
}