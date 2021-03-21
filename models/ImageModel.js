 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const ImageSchema = new Schema({
  imageName: {
    type: String,
    required: true
  },
  imageData: {
    type: String,
    requried: true
  },
  date: {
    type: Date,
    default: Date.now
}
},{
  collection: 'image'
}
)
 
module.exports = mongoose.model('image', ImageSchema);