require("dotenv").config()
const jwt = require("jsonwebtoken")

const verifyToken = async(req, res, next) => {
    try {
        const headerToken = req.get("Authorization");
        
        if(!headerToken) return res.status(401).json({ error: "Token not found" })

        const token = headerToken.replace("Bearer ", "");
        console.log("linea 11 ", token)

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user_id = decoded.user_id;

            next()
        } catch (error) {
            next(error)
        }
    } catch (error) {
        next(error)
    }
}

module.exports = {
    verifyToken
}