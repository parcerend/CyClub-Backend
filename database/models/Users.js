const connection = require('../../config/conn');

const usersSchema = connection.Schema({
    username: String,
    name: String,
    email: {type: String, unique: true, required: true},
    birth_date: Date,
    phone_num: String,
});


usersSchema.index({email: 1});
const usersModel = connection.model('users', usersSchema);


/**
 * TODO: Manage exceptions xd
 * Will I someday?
 * @param err 
 */
function handleError(err) {
    throw err;
}

module.exports = {
    getAll: (callback) => usersModel.find({}, callback),

    register: (newUser, callback) => {
        usersModel.create(newUser, (err, data) => {
            callback(err, data);
        });
    },

    findByEmail: (email, callback) => {
        usersModel.findOne({ email }, callback);
    }
}