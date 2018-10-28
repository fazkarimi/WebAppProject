var mongoose = require('mongoose'),


 myUsersSchema = new mongoose.Schema({
        Name: String,
        Password: String,
        Email: {type: String, unique : true},
        DOB: String,
        Address: String,
        Gender : String,
        Occupation: String,

    },

    { collection: 'appdb' });

module.exports = mongoose.model('aUser', myUsersSchema);

