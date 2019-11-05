const connection = require('../../config/conn');

const usersSchema = connection.Schema({
    email: String,
    name: String
});

const usersModel = connection.model('users', usersSchema);

function handleError(err) { throw err; }

module.exports = {
    getAll: (callback) => usersModel.find(callback),

    register: (newUser) => {
        usersModel.create(newUser, (err, data) => {
            if(err) handleError(err);
            console.log("Data saved", data); 
        });
    },

    findByEmail: (email, callback) => usersModel.findOne({ 'email': email }, (a, e) => {
        console.log(e);
        callback(a, e);
    })
}