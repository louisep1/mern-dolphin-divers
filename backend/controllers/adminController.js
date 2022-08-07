const bcryptjs = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const { findOne } = require('../models/adminModel')
const Admin = require('../models/adminModel')


// @ desc    Login Administrator
// @route    POST /api/admin
// @access   Public (but hidden from main ui)
const loginAdmin = asyncHandler(async(req, res) => {
  const {username, password} = req.body

  if(!username || !password) {
    res.status(400)
    throw new Error ('Missing fields')
  }

  const admin = await Admin.findOne({username})

  if(admin && (await bcrypt.compare(password, admin.password))) {
    res.status(200).json({
      username,
      id: admin._id,
      token: generateToken(admin._id)
    })
  } else {
    res.status(400)
    throw new Error ('Invalid login')
  }
  
})



// @ desc    Create Administrator
// @route    POST /api/admin/new
// @access   Public (but hidden from main ui)
const createAdmin = asyncHandler(async(req, res) => {
  const {username, password} = req.body

  if(!username || !password) {
    res.status(400)
    throw new Error ('Invalid login')
  }

  const alreadyExists = await Admin.findOne({username})

  if (alreadyExists) {
    res.status(400)
    throw new Error('Already exists')
  }

  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)

  const admin = await Admin.create({
    username,
    password: hashedPassword
  })

  if(admin) {
    res.status(201).json({
      username,
      id: admin._id,
      token: generateToken(admin._id)
    })
  } else {
    res.status(400)
    throw new Error('Admin could not be created')
  }
})



const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET, {
    expiresIn: '1d'
  })
}


module.exports = {
  loginAdmin,
  createAdmin
}