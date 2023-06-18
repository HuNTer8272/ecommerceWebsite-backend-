import User from "../model/user.js";

const UserController = {
    createUser: async (req, res) => {
        try {
            const newUser = await User.create(req.body);
            res.send(`New user ${newUser} has been successfully created`);
        } catch (e) {
            console.log(`An error occurred: ${e}`);
            res.send(`An error occurred: ${e}`);
        }
    }
}

export default UserController;
