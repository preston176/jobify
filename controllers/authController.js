import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs';
import { hashPassword } from '../utils/passwordUtils.js';
import { UnauthenticatedError } from '../errors/customErrors.js';


async function createUserWithRole(req) {
    try {
        const isFirstAccount = (await User.countDocuments()) === 0;
        req.body.role = isFirstAccount ? 'admin' : 'user';

        const user = await User.create(req.body);
        return user;
    } catch (error) {
        // Handle errors appropriately
        console.error(error);
        throw error;
    }
}
export const register = async (req, res) => {
    const hashedPassword = await hashPassword(req.body.password);
    req.body.password = hashedPassword;

    const user = await User.create(req.body);
    res.status(StatusCodes.CREATED).json({ msg: 'user created' });
};
export const login = async (req, res) => {
    // check if user exists
    // check if password is correct

    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new UnauthenticatedError('invalid credentials');

    res.send('login route');
};
