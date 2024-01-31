const UsersModel = require('../models/user.js');
const { v4: uuidv4 } = require('uuid');

const deleteImage = require('../helpers/deleteImg.js');

const postImg = require('../helpers/uploadImg.js')


const controller = {};

controller.postNewUser = async (req, res) => {
    try {
        const { username } = req.body
        const { pass } = req.body;
        const { mail } = req.body
        const newUser = await UsersModel.create({
            ID: uuidv4(),
            username,
            pass,
            mail
        });
        res.status(200).json({ message: newUser });
    } catch (err) {
        console.log(`Error al crear un usuario: ${err}`);
        res.status(500).json({ message: 'Error al crear un usuario' });
    }
};


controller.getUser = async (req, res) => {
    try {
        const { username, pass } = req.body;

        const user = await UsersModel.findOne({
            where: {
                username: username,
                pass: pass
            }
        });

        if (!user) {
            // Si no se encuentra el usuario, devuelve false
            return res.status(404).json({ message: 'false' });
        }

        // Compara la contraseña enviada con la almacenada en la base de datos
        //const passwordMatch = await bcrypt.verifySync(pass, user.pass);
        //const passwordMatch = await bcrypt.compare(pass, user.pass);

        if (username == user.username) {
            // Las contraseñas coinciden, devuelve true
            console.log(pass)
            console.log(user.pass)
            res.status(200).json({
                message: {
                    authorized: 'true',
                    id: user.ID,
                    firstTime: user.firsTime
                }
            });
        } else {
            // Las contraseñas no coinciden, devuelve false
            res.status(200).json({ message: 'false' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'error al buscar el usuario' });
    }

}
controller.getFirstTime = async (req, res) => {
    try {
        const { username } = req.body;
        const user = await UsersModel.findOne({
            where: {
                username: username
            }
        });
        console.log(user)
        if (!user) {
            res.status(404).json({ message: 'User not found :(' });
        };
        res.status(200).json({ message: user.firsTime });
    } catch (err) {
        res.status(500).json({ message: 'Error to get a firsTime user :(' });
    }
}

controller.putProfileImage = async (req, res) => {
    try {
        const { userID } = req.body;
        const { profileImage } = req.files;
        const newImg = await postImg(profileImage, 'profileImages');
        const oldPlanImage = await UsersModel.findOne({
            where: {
                ID: userID
            }
        })

        if (!oldPlanImage.dataValues.profileImage) {
            await UsersModel.update(
                {
                    profileImage: newImg
                },
                {
                    where: {
                        ID: userID
                    }
                }
            );
        };
        if (oldPlanImage.dataValues.profileImage) {
            try {
                deleteImage('profileImages', oldPlanImage.dataValues.profileImage);
                console.log(`plant image -> ${oldPlanImage.dataValues.profileImage}`);

                await UsersModel.update(
                    {
                        profileImage: newImg
                    },
                    {
                        where: {
                            ID: userID
                        }
                    }
                );


            } catch (err) {
                console.log(`plant not deleted desde controlador`)
            };
        };

        res.status(200).json({ message: 'Profile image updated!!!' });
    } catch (err) {
        res.status(500).json({ message: 'Error to update a profile image :(' + err });
    }
}

controller.getProfileImage = async (req, res) => {
    try {
        const { userID } = req.body;

        const userImage = await UsersModel.findOne({ where: { ID: userID } });
        res.status(200).json({ message: userImage });
    } catch (err) {
        res.status(500).json({ message: 'Error to get profile image :(' });
    };
};




controller.testUser = async (req, res) => {
    const { id } = req.params;
    const userImage = await UsersModel.findOne({ where: { ID: id } });
    console.log(userImage.dataValues.profileImage);
}


module.exports = controller;