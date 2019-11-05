const connection = require('../../config/conn');

const routesSchema = connection.Schema({
    name: String,
    label: String,
    coordinates: Array
});

const routesModel = connection.model('routes', routesSchema);

/**
 * TODO: Manage exceptions xd
 * Will I someday?
 * @param err 
 */
function handleError(err) {
    throw err;
}

module.exports = {
    getAll: (callback) => routesModel.find(callback),

    add: (newRoute) => {
        routesModel.create(newRoute, (err, data) => {
            if(err) handleError(err);
            console.log("Data saved", data); 
        });
    }
    
    
}