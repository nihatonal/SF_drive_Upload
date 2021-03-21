const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const path = require('path');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const signUpTemplateCopy = require ('../models/SignUpModels')
const profileImg = require('../models/profileImg');
const ImageModel = require('../models/ImageModel');
const bcrypt = require('bcrypt');

router.use(fileUpload());


router.post('/signup', async (request, response) => {

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
        userName: request.body.userName,
        birthdayDate: request.body.birthdayDate,
        email: request.body.email,
        phone: request.body.phone,
        passport: request.body.passport,
        datepassport: request.body.datepassport,
        issued: request.body.issued,
        code: request.body.code,
        license: request.body.license,
        licenseDate: request.body.licenseDate,
        password: securePassword,
    })
    signedUpUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error)
    })
});


// router.route("/uploadmulter")
//     .post(upload.single('imageData'),(req, res, next) => {
//         console.log(req.body.imageName)
       
//         let TypeImage = req.body.imageType

//         const newImage = new profileImg({
//             imageName: req.body.imageName,
//             imageType: req.body.imageType,
//             img: { data:fs.readFileSync(path.join('C:/skillfactory/react/sf_drive/client/public/uploads/' + req.body.imageName)),
//                    contentType: `${TypeImage}` } 
          
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



module.exports = router