/// <reference path="../typings/index.d.ts" />
"use strict";
var Http = require('http');
var toeknee;
(function (toeknee) {
    var cors;
    (function (cors) {
        var CorsPassthru = (function () {
            // todo: pass in destination url root and url validation (for if test below)
            function CorsPassthru() {
                this.Client = require('node-rest-client').Client;
                this.Promise = require('bluebird');
                this.restClient = new this.Client();
                this.initiate();
            }
            CorsPassthru.prototype.startServer = function () {
                this.server.listen(8200);
                console.log('Server running at ' + this.server.localAddress + ':' + this.server.localPort);
            };
            CorsPassthru.prototype.initiate = function () {
                var _this = this;
                this.server = Http.createServer(function (request, response) { return _this.passThrough(request, response); });
            };
            CorsPassthru.prototype.passThrough = function (request, response) {
                console.log(request.url);
                // todo: for now only redirect the nasa stuff
                // in future make this generic
                // maybe config so we can either do JSON or other data
                if (request.url.indexOf('mars-photos') > 0) {
                    this.getAsync(request.url).then(function (data) {
                        response.writeHead(200, {
                            'Content-Type': 'application/json',
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Headers': 'X-Requested-With'
                        });
                        response.write(JSON.stringify(data));
                        response.end();
                    })
                        .catch(function (err) {
                        response.statusCode = 500;
                        response.end();
                    });
                }
                else {
                    response.end();
                }
                ;
            };
            CorsPassthru.prototype.getAsync = function (url) {
                var _this = this;
                return new this.Promise(function (resolve, reject) {
                    var args = {
                        requestConfig: {
                            timeout: 10000
                        },
                        responseConfig: {
                            timeout: 10000
                        }
                    };
                    // todo: make this more generic
                    var destinationUrl = 'https://api.nasa.gov' + url;
                    console.log('Destination: ' + destinationUrl);
                    var returnData = '';
                    var req = _this.restClient.get(destinationUrl, function (data, response) {
                        console.log('Destination resolved');
                        resolve(data);
                    });
                    req.on('requestTimeout', function (req) {
                        console.log('request has expired');
                        req.abort();
                        reject('request expired');
                    });
                    req.on('responseTimeout', function (res) {
                        console.log('response has expired');
                        reject('response expired');
                    });
                    req.on('error', function (err) {
                        console.log('request error', err);
                        reject('request error' + err);
                    });
                });
            };
            return CorsPassthru;
        }());
        cors.CorsPassthru = CorsPassthru;
    })(cors = toeknee.cors || (toeknee.cors = {}));
})(toeknee || (toeknee = {}));
new toeknee.cors.CorsPassthru().startServer();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGlueXNlcnYuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0aW55c2Vydi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSw4Q0FBOEM7O0FBRTlDLElBQU8sSUFBSSxXQUFXLE1BQU0sQ0FBQyxDQUFDO0FBRTlCLElBQVUsT0FBTyxDQWtGaEI7QUFsRkQsV0FBVSxPQUFPO0lBQUMsSUFBQSxJQUFJLENBa0ZyQjtJQWxGaUIsV0FBQSxJQUFJLEVBQUMsQ0FBQztRQUN0QjtZQU1FLDRFQUE0RTtZQUM1RTtnQkFOUSxXQUFNLEdBQUcsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUM1QyxZQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2dCQUM5QixlQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7Z0JBS3JDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUNsQixDQUFDO1lBRU0sa0NBQVcsR0FBbEI7Z0JBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ3pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDN0YsQ0FBQztZQUVPLCtCQUFRLEdBQWhCO2dCQUFBLGlCQUVDO2dCQURDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxVQUFDLE9BQU8sRUFBRSxRQUFRLElBQUssT0FBQSxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQyxDQUFDO1lBQzlGLENBQUM7WUFFTyxrQ0FBVyxHQUFuQixVQUFvQixPQUE2QixFQUFFLFFBQTZCO2dCQUM5RSxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENB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