const connection = require('../../config/conn');

const usersSchema = connection.Schema({
    name: String,
    label: String,
    coordinates: Array
});

const usersModel = connection.model('routes', routesSchema);

function handleError(err) { throw err; }

module.exports = {
    getAll: (callback) => usersModel.find(callback),

    add: (newUser) => {
        usersModel.create(newUser, (err, data) => {
            if(err) handleError(err);
            console.log("Data saved", data); 
        });
    }
}