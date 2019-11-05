const connection = require('../../config/conn');

const personalRoutesSchema = connection.Schema({
    ownerId: String,
    name: String,
    label: String,
    coordinates: Array
});

const personalRoutesModel = connection.model('personalRoutes', routesSchema);

/**
 * TODO: Manage exceptions xd
 * Will I someday?
 * @param err 
 */
function handleError(err) {
    throw err;
}

module.exports = {
    getAll: (callback) => personalRoutesModel.find(callback),

    add: (newRoute) => {
        personalRoutesModel.create(newRoute, (err, data) => {
            if(err) handleError(err);
            console.log("Data saved", data); 
        });
    }
}