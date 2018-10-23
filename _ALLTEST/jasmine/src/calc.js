function add (x,y) {
    z = x + y;
   return z
};
function sub (x,y) {
    z = x - y;
   return z
};

cal = {add:add, sub:sub};
module.exports = cal;
 