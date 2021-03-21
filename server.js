const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/routes')
const imageUrls = require('./routes/image')
const cors = require('cors')

const app = express();

dotenv.config()

mongoose.connect(process.env.DATABASE_ACCESS,  ()=> console.log('Database connected'))

const bodyParser = require('body-parser');

const path = require('path');
app.use(fileUpload());

app.use(express.json())
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/uploads', express.static('uploads'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(cors())

app.use('/app', routesUrls)
app.use('/app', imageUrls)
app.listen(5000, () => console.log('Server Started...'));