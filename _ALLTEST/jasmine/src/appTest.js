var fx = function(id, did, date, title) {
    this.id = id;
    this.did = did;
    this.date = date; 
    this.title = title;
    this.body = function () {
        return this.date + '--> ' + this.title;
    }
}
/*
var multiply = function(p1,p2) {
this.p1 = p1;
this.p2 = p2; 
    return this.p1 * this.p2;
};
*/
var multiply = 2 * 2;
var cccc = 'cccc'; 
var jasmineTest = true; 
var a = jasmineTest;  

objs = {a, jasmineTest,cccc, fx, multiply };

module.exports = objs;