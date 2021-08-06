var express = require('express')
var router = express.Router()
const {
  getCategoryById,
  createCategory,
  getCategory,
  getAllCategory,
  updateCategory,
  removeCategory
} = require('../controllers/category.controller')
const {
  isSignedIn,
  isAdmin,
  isAuthenticated
} = require('../controllers/auth.controller')
const { getUserById } = require('../controllers/user.controller')
//params
router.param('userId', getUserById)
router.param('categoryId', getCategoryById)
router.post(
  '/category/create/:userId',
  isSignedIn,
  isAuthenticated,
  isAdmin,
  createCategory
)

//read
router.get('/category/:categoryId', getCategory)
router.get('/categories', getAllCategory)

//update
router.put(
  '/category/:categoryId/:userId',
  isSignedIn,
  isAuthenticated,
  isAdmin,
  updateCategory
)

//delete

router.delete(
  '/category/:categoryId/:userId',
  isSignedIn,
  isAuthenticated,
  isAdmin,
  removeCategory
)
module.exports = router
