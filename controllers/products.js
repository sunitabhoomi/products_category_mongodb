/** imported products model */
var Product = require('../models/products');

/** add products API */
exports.addProducts = (req) => new Promise(function(resolve, reject ){
    let newProducts = new Product({
        name : req.body.name,
        description : req.body.description,
        uom: req.body.uom,
        preservationMethods : req.body.preservationMethods,
        gst : req.body.gst,
        category : req.body.category
    });    
    newProducts.save((err, category) => {     
        if(err){
            resolve({success: false,message: 'failed to add Products'})
        }
        else {
            resolve({success: true, message : 'Products added successfully'});
        }
    })
  
})

/** get all Products API */
exports.getAllProducts = (req) => new Promise(function(resolve, reject ){
    Product.find({}, function(err, products){
        if(err){
            reject(err);
        }
        else {
            resolve(products)
        }
    })
})


/** get all products by product id */
exports.getProductsByProductId = (req) => new Promise(function(resolve, reject ){
    Product.findById({_id: req.params.id}, function(err, products){
        if(err){
            reject(err);
        }
        else {
            resolve(products)
        }
    })
})



/** update products by product id */
exports.updateProductsByProductId = (req) => new Promise(function(resolve, reject ){
    Product.update({ _id: req.body.id},{ $set : {
        name : req.body.name,
        description : req.body.description,
        uom: req.body.uom,
        preservationMethods : req.body.preservationMethods,
        gst : req.body.gst,
        category : req.body.category,
        isEnabled : req.body.isEnabled
       }},function(err, category){
       if(err){
           reject(err);
       }
       else {
        resolve({success : true, message : 'Products has been updated successfully'});
       }
   })
})


/** get all products by category id */
exports.getAllProductsByCategoryId = (req) => new Promise(function(resolve, reject ){
    Product.find({category : req.body.category}, function(err, products){
        if(err){
            reject(err);
        }
        else {
            req.products = products;
            resolve(products)
        }
    })
})

/** delete products by using category id */
exports.deleteProductsByCategoryId = (req) => new Promise(function(resolve, reject ){
    Product.deleteMany({category : req.body.category}, function(err, products){
        if(err){
            reject(err);
        }
        else {
            resolve(products)
        }
    })
})

