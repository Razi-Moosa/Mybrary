const express=require('express')
const router = express.Router()
const Book=require('../models/books')

router.get('/', async(req,res)=>{
   let books
   try {
      books= await Book.find().sort({createdAt:'desc'}).limit(5).exec()  //5 books only on main page
   } catch {
      books=[]
   }
   res.render('index', {
      books:books
   })
})

module.exports = router
