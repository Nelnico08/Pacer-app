const { Equivalences} = require('../db')

const getEquivalences = async(req, res, next) => {
    try {
        const user_id = req.user_id

        const equivalences = await Equivalences.findOne({
            where: { userId: user_id},
            attributes: { exclude: ["userId"]}
        })

        if(!equivalences) return res.status(200).json({ message: "Equivalences not found" })

        return res.status(200).json(equivalences)
    } catch (error) {
        next(error)
    }
}

const postEquivalences = async(req, res, next) =>{
    try {
        const user_id= req.user_id
        const { equivalences } = req.body  // equivalences= { oneK: 0:03:30 03:30, twoK: 0:07:10 03:35, ....}

        await Equivalences.update( equivalences , { where: { userId: user_id }})

        res.status(201).send("Post success")
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getEquivalences,
    postEquivalences
}