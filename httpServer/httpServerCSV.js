var http = require('http');
var fs = require('fs');
var apigee = require('apigee-access');


console.log('node.js application starting...');


var svr = http.createServer(function(req, resp) {
    
    resp.setHeader('Content-Type', 'text/plain');
	var myStr = "username,password\nabc,3033\nrun,3034\nabc,123\nrun,3035\nabc,3036\nrun,3037,3033\nrun,3034\nabc,123\nrun,3035\nabc,3036\nrun,3037";
	fs.writeFile('temp.txt', myStr, function(err) {
	  if (err) throw err;
	  console.log("Wrote file");
	  data = fs.readFileSync('temp.txt');
	  console.log("Read from file");
	  myResponse = "col1,col2\n" + data;
          apigee.setVariable(req, 'myVar',myResponse);
	  console.log("Set variable myVar");
	  console.log("About to send response = " + myResponse);
          resp.end(myResponse);
	});
	
});


svr.listen(3033, function() {
	console.log('Node HTTP server is listening on 3033');
});
/*  
var fs = require('fs-sync');
 
if(fs.exists('package.json')){
    var pkg = fs.readJSON('package.json');
}
  fs
    fs-sync
    sync
    synchronous fs
    copy
    mkdir
    mkdirp
    write
    read
    readJSON
    isDir
    isFile
    isLink
    exists
    grunt file
    delete
    expand
    contain*/