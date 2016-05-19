var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
// this is our friends.js file located at /server/controllers/friends.js
// note the immediate function and the object that is returned
module.exports = (function() {
  return {
// notice how index in the factory(client side) is calling the index method(server side)
    index: function(req, res) {
      Friend.find({}, function(err, friends) {
       if(err) {
         console.log(err);
       } else {
         res.json(friends);
       }
    })
  },
  	create: function(req, res) {
    	var friend = new Friend({name: req.body.name, age: req.body.age});
    	friend.save(function(err, result) {
     //if there is an error console.log that something went wrong!
      		if(err) {
        		console.log('something went wrong');
      		} else { // else console.log that we did well and then redirect to the root route
        		console.log('successfully added a friend!');
       		res.json(result);
      		}
    })
  },
  	show: function (req, res){
		Friend.find({}, function(err, friends){
			if(err){
				console.log(err);
				console.log('\nError getting all friends!');
			} else {
				res.json(friends);
			}
		})
	}
 }
})();

