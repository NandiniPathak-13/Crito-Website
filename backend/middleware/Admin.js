import jwt from 'jsonwebtoken'
import User from '../models/user.js'

const IsAdmin = async (req, res, next) => {
    try {
        const token = req.cookies.token
        if (!token) {
            return res.status(401).json({ success: false, message: "Unauthorized: No token Provided" })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await User.findById(decoded.userId)
        
        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized: User not found" })

        }
        if (user.Role !== 'admin') {
            return res.status(401).json({
                success: false,
                message: "Unauthorized: User is not an admin"
            })
        }


        next()

    } catch (error) {
        console.log(error)
        return res.status(500).json({ success: false, message: "Internal erver Error" })

    }
}

export { IsAdmin }