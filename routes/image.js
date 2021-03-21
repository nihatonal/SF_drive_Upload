const express = require('express');
const ImageModel = require('../models/ImageModel');
const imageRouter = express.Router();
const multer = require('multer');
const fs = require('fs')

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'public/uploads');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname + Date.now() );
    }
});

const fileFilter = (req, file, cb) => {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

imageRouter.post('/uploadimage', upload.single('file'), (req,res, next) => {
        console.log(req.file)
    
})

// imageRouter.route("/uploadimage")
//     .post(upload.single('imageData'), (req, res, next) => {
//         console.log(req.body);

        
//         const newImage = new ImageModel({
//             imageName: req.body.imageName,
//             imageData: req.file
//         });

//         newImage.save()
//         .then((result) => {
//             console.log(result)
//             res.status(200).json({
//                 success: true,
//                 document:  result
//             });
//         })
//         .catch((err) =>next(err));
// });

module.exports = imageRouter