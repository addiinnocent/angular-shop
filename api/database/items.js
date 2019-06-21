var mongoose = require('mongoose');
var Items = mongoose.model('items');

module.exports = this;

this.getAll = (by, callback) => {
	Items.find(by).
	select('-_id').
	select('-__v').
	exec((err, result) => {
		if (err) return console.error(err);
		return callback(result);
	});
}

this.get = (by, callback) => {
	Items.findOne(by).
	sort({$natural:-1}).
	exec((err, result) => {
		if (err) return console.error(err);
		return callback(result);
	});
}

this.add = (data, callback) => {
	var item = new Items(data);
	if (!data.id) item.set('id', item._id);
	item.save((err, entry) => {
		if (err) return console.error(err);
		return callback(entry);
	});
}





this.fetch = () => {
	var items = require('../test.json');
	for (let item of items) {
		this.add(item, (data) => {
			console.log(data.name+' added!');
		});
	}
}
