var express = require('express');
var fs = require('fs');
var datafile = 'server/data/patients.json';
var router = express.Router();

/* GET all patients and POST new patients */
router.route('/')
    .get(function(req, res) {
        var data = getBookData();
        res.send(data);
    })

    .post(function(req, res) {

        var data = getBookData();
        var nextID = getNextAvailableID(data);

        var newBook = {
            patient_id: nextID,
            title: req.body.title,
            author: req.body.author,
            year_published: req.body.year_published
        };

        data.push(newBook);

        saveBookData(data);

//        res.set('Content-Type', 'application/json');
        res.status(201).send(newBook);
    });


/* GET, PUT and DELETE individual patients */
router.route('/:id')

    .get(function(req, res) {

        //console.log('Retrieving patient id: ' + req.params.id);

        var data = getBookData();

        var matchingBooks = data.filter(function(item) {
            return item.patient_id == req.params.id;
        });

        if(matchingBooks.length === 0) {
            res.sendStatus(404);
        } else {
            res.send(matchingBooks[0]);
        }
    })

    .delete(function(req, res) {

        var data = getBookData();

        var pos = data.map(function(e) {
            return e.patient_id;
        }).indexOf(parseInt(req.params.id, 10));

        if (pos > -1) {
            data.splice(pos, 1);
        } else {
            res.sendStatus(404);
        }

        saveBookData(data);
        res.sendStatus(204);

    })

    .put(function(req, res) {

        var data = getBookData();

        var matchingBooks = data.filter(function(item) {
            return item.patient_id == req.params.id;
        });

        if(matchingBooks.length === 0) {
            res.sendStatus(404);
        } else {

            var patientToUpdate = matchingBooks[0];
            patientToUpdate.title = req.body.title;
            patientToUpdate.author = req.body.author;
            patientToUpdate.year_published = req.body.year_published;

            saveBookData(data);
            res.sendStatus(204);

        }
    });

function getNextAvailableID(allBooks) {

    var maxID = 0;

    allBooks.forEach(function(element, index, array) {

        if(element.patient_id > maxID) {
            maxID = element.patient_id;
        }

    });

    return ++maxID;

}

function getBookData() {
    var data = fs.readFileSync(datafile, 'utf8');
    return JSON.parse(data);
}

function saveBookData(data) {
    fs.writeFile(datafile, JSON.stringify(data, null, 4), function (err) {
        if (err) {
            console.log(err);
        }
    });
}

module.exports = router;
