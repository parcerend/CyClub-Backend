/**
 * This module will make the connection with the DB (Mongo)
 */
const mongoose = require('mongoose');
const public = {
    name: 'public',
    key: 'bazuco'
};

//const url = `mongodb+srv://${public.name}:${public.key}@cluster0-hptao.mongodb.net/CyClub?retryWrites=true&w=majority`;
const url = 'mongodb://localhost:27017/CyClub';
mongoose.connect(url, {useNewUrlParser: true});
mongoose.set('useCreateIndex', true);


module.exports = mongoose;