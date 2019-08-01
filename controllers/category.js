/** imported database  */
var Category = require('../models/category');
var Product = require('../models/products');

/** to add category */

 exports.addCategory = (req) => new Promise(function(resolve, response){
    let newCategory = new Category({
        title : req.body.title,
        description : req.body.description
    });  
    newCategory.save((err, category) => {     
        if(err){
            resolve({success: false,message: 'failed to add category'})
        }
        else {
            resolve({success: true,message : 'Category added successfully'});
        }
    })
})

/** to get all the category */

exports.getAllCategory = () => new Promise(function(reslove, reject){
  Category.find({}, function(err, category){
      if(err){
          reject(err);
      }
      else {
          reslove(category)
      }
  })
})

/** to get category by using category id */

exports.getAllCategoryByCategoryId = (req) => new Promise(function(reslove, reject){
    Category.find({_id : req.params.id}, function(err, category){
        if(err){
            reject(err);
        }
        else {
            reslove(category)
        }
    })
})

/** update category  */

exports.updateCategoryByCategoryId = (req) => new Promise(function(reslove, reject){
    Category.update({ _id: req.body.id},{ $set : {
         title : req.body.title,
         description : req.body.description 
        }},function(err, category){
        if(err){
            reject(err);
        }
        else {
            reslove({success: true, message: 'category has been updated successfully'});
        }
    })
})

/** delete category using category id */
exports.deleteCategoryByCategoryId = (req) => new Promise(function(resolve, reject ){
    Product.deleteMany({_id : req.body.category}, function(err, category){
        if(err){
            reject(err);
        }
        else {
            resolve({'deleted products are': req.products})
        }
    })
})