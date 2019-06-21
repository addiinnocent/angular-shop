const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
	name: String,
	password: {type: String, select: false},
	email: String,
	verified: {type: Boolean, default: false},
	session: String,
	language: {type: String, default: 'en'},
	useragent: {type: String, select: false},
});
mongoose.model('users', UserSchema);

var ItemSchema = new Schema({
	id: String,
	vendor: {type: Schema.Types.ObjectId},
	name: String,
	price: Number,
	category: {type: String, default: null},
	amount: {type: Number, default: 0},
});
mongoose.model('items', ItemSchema);
