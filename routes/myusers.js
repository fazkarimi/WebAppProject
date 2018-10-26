let comments = require('../models/comments');
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let aUser = require('../models/myusers');

var mongodbUri = 'mongodb://appdb:appdb123@ds141783.mlab.com:41783/appdb';

// this is where the CRUD will be created

// get
router.getAllUsers = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    aUser.find(function(err, myusers) {
        if (err)
        {
            res.send('There are no users to view!!');
        }
        else {
            res.send(JSON.stringify(myusers, null, 5));
        }
    });
}


//get
router.getOne = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    aUser.find({"_id": req.params.id}, function (err, aUser) {
        if (err) {
            res.send('The user with that ID does NOT Exist!!'); // if not, error message
        }

        // return a suitable error message
        else {
            res.send(JSON.stringify(aUser, null, 5)); // if it does then display
        }
        // return the donation
    });

   /* function getById(array, id) {
        var usersReturned = array.filter(function (obj) {
            return obj.id == id;
        });
        return usersReturned ? usersReturned[0] : null; // or undefined
    }*/
}

//add
    router.addUser = (req, res) => {

        res.setHeader('Content-Type', 'application/json');

        var User = new aUser();

            User.Name = req.body.Name;
            User.Password = req.body.Password;
            User.Email = req.body.Email;
            User.DOB = req.body.DOB;
            User.Address = req.body.Address;
            User.Gender = req.body.Gender;
            User.Occupation = req.body.Occupation;

                User.save(function(err)
                {
                    if (err)
                    {
                        res.json({ message: 'User was not added!' } );
                    }

                    else
                    {
                        res.json({ message: 'A new User was added!', data: aUser });
                    }

                });
    }


//delete
    router.deleteUser = (req, res) => {
        aUser.findByIdAndRemove(req.params.id, function(err) {
            if (err)
            {
                res.json({message: 'User was Not Deleted!'});
            }

            else
            {
                res.json({message: 'User Deleted!'});
            }
        });
    }


mongoose.connect(mongodbUri);

let db = mongoose.connection;

db.on('error', function (err) {
    console.log('Unable to Connect to [ ' + db.name + ' ]', err);
});

db.once('open', function () {
    console.log('Successfully Connected to [ ' + db.name + ' ]');
});


module.exports = router;