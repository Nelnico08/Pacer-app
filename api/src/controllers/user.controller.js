const { User, Equivalences, Training } = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const getUser = async(req, res, next) => {
    try {
        const users = await User.findAll()

        if(!users.length) return res.status(404).send("no registered users")

        return res.status(200).json({users: users})
    } catch (error) {
        next(error)
    }
}

const register = async(req, res, next) => {
    try {
        const { username, email, password, firstname, lastname, user_image } = req.body
        let user;

        if(username && !email){
            user = await User.findOne({where:{ username: username}})
        }
        if(!username && email){
            user = await User.findOne({where:{ email: email}})
        }

        if(user)return res.status(409).json({error: "User/Email already exists"})

        const hashPass = await bcrypt.hash(
            password,
            Number(process.env.SALT_ROUNDS)
        )

        await User.create({
            username,
            email,
            firstname,
            lastname,
            password: hashPass,
            user_image
        })

        return res.status(201).json({ok: "User created"})
    } catch (error) {
        console.log(error)
        return res.status(404).send("there was an error, try again")
    }
}

const login = async(req, res, next) => {
    try {
        const { loginUser, password } = req.body

        if(!loginUser || !password) return res.status(400).json({error: "Email and Password are required."})

        let user;

        user = await User.findOne({where: { username: loginUser }});

        if(!user){
            user = await User.findOne({where: { email: loginUser }});

            if(!user) return res.status(403).json({error: "Username or password invalid"})
        }

        const comparePassword = await bcrypt.compare(password, user.password);

        if(!comparePassword) return res.status(403).json({error: "Username or password invalid"});

        const token = jwt.sign({ user_id: user.id}, process.env.JWT_SECRET);

        return res.status(200).json({token: token})
    } catch (error) {
        console.log(error)
        return res.status(404).send("There was an error, please, try again")
    }
}

module.exports = {
    getUser,
    register,
    login
}