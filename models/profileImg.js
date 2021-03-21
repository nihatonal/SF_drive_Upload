const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var ImageSchema = new Schema({
    imageName: {
        type: String
    },
    imageType: {
        type:  String
    },
    img: {
         data: Buffer, 
         contentType: String 
    },
    date: {
        type: Date,
        default: Date.now
    }
});

var profileImg = mongoose.model('Image', ImageSchema);

module.exports = profileImg;