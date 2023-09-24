const User = require('../models/User.js')

module.exports = {
    getAllUser: async (req, res) => {
        try {
            const users = await User.find({})
            res.status(200).json(users)
        } catch (error) {
            res.status(500).json('get all user error')
        }
    }
}