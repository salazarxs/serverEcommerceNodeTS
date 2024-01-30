import { v4 as uuidv4 } from 'uuid';


const postImg = async (img, folder) => {
    try {
        //const img = req.files.file;
        const imageRoute = `./public/${folder}/${uuidv4()}_${img.name}`;
        console.log(imageRoute)
        //solo subir archivo al server

        const uploadImg = await img.mv(imageRoute, err => {
            if (err) {
                console.log(err);
                //res.status(500).json({ message: err });
                return;
            }

            //res.status(200).json({ message: 'image upload!!!' })
        })
        return imageRoute;

    } catch (err) {
        console.log(err)
        //res.status(500).json({ message: err });
    }
};

export default postImg;