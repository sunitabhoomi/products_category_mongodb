/** imported mongoose schema */
var mongoose = require('mongoose')
var  Schema = mongoose.Schema;

var productSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    uom : {
        type : String,
        required : true
    },
    preservationMethods : {
        type : String,
        required : true
    },
    gst : {
        type : Number,
        required : true
    },
    isEnabled : {
        type : Boolean,
        default : 1
    },
    category:[{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Category'
    }],
    createdOn :{
        type: Date, 
        default: Date.now
    }
 
});

/** compling Schema into a model */
const Product = module.exports = mongoose.model('Product', productSchema);