'use strict'

var MongoClient = require('mongodb').MongoClient;

let atlas_connection_uri;
let cachedDB = null; // declare outside object plann to cache for 

exports.handler = (event, context, callback) => {  // here this i Lambda code AWS expects ..(using lambda-local)
    var uri = process.env['MONGODB_ATLAS_CLUSTER_URI'];  // declare MONGODB Node.js driver

    if (atlas_connection_uri != null) {
        processEvent(event, context, callback);
    }
    else {
        atlas_connection_uri = uri;
        console.log('theAtlas connection string is ' + atlas_connection_uri);
        processEvent(event, context, callback);
    }
};

function processEvent(event, context, callback) {
    console.log('Callign MongoDB Atlas from AWS Lambda with event: ' + JSON.stringify(event));
}