var mongoose = require('mongoose')
var  Schema = mongoose.Schema;

var categorySchema = new Schema({
    title : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    createdOn :{
        type: Date, 
        default: Date.now
    }
 
});

const Category = module.exports = mongoose.model('Category', categorySchema);