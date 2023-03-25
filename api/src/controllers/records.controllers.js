const { Record } = require('../db')

const getRecords = async(req, res, next) => {
    try {
        const user_id = req.user_id

        const records = await Record.findOne({
            where: {userId: user_id},
            attributes: { exclude: ["userId"]}
        })

        if(!records) return res.status(200).json({ message: "Records not found" })

        return res.status(200).json(records)
    } catch (error) {
        next(error)
    }
}

const postRecords = async(req, res, next) => {
    try {
        const user_id = req.user_id
        const { records } = req.body  //"records": {"fiveK": "0:20:44-04:09","tenK": "0:43:52-04:23"}

        await Record.update( records, {where: { userId: user_id}});

        res.status(201).send("Post success")
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getRecords,
    postRecords
}