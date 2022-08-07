const asyncHandler = require('express-async-handler')
const Query = require('../models/queryModel')

// @ desc    Send a query
// @route    POST /api/query/
// @access   Public
const sendQuery = asyncHandler(async (req, res) => {
  const { firstName, lastName, email, message, phone } = req.body

  if (!firstName || !lastName || !email || !message) {
    res.status(400)
    throw new Error('Please complete all necessary fields')
  }

  const query = await Query.create({
    firstName,
    lastName,
    email,
    message,
    phone,
  })

  if (query) {
    res.status(200).json({
      firstName: query.firstName,
      lastName: query.lastName,
      email: query.email,
      message: query.message,
      phone: query.phone,
      _id: query._id,
    })
  } else {
    res.status(400)
    throw new Error('Query could not be submitted')
  }
})

// @ desc    Get all queries
// @route    GET /api/query/
// @access   Private
const getQueries = asyncHandler(async (req, res) => {
  const queries = await Query.find()

  res.status(200).json(queries)
})

// @ desc    Updated the responded boolean on a query
// @route    PUT /api/query/
// @access   Private
const updateResponded = asyncHandler(async (req, res) => {
  const query = await Query.findById(req.body._id)

  const updatedQuery =
    query.responded === true
      ? await Query.findByIdAndUpdate(req.body._id, { responded: false })
      : await Query.findByIdAndUpdate(req.body._id, { responded: true })

  res.status(200).json({
    _id: updatedQuery._id,
    firstName: updatedQuery.firstName,
    lastName: updatedQuery.lastName,
    email: updatedQuery.email,
    message: updatedQuery.message,
    phone: updatedQuery.phone,
    responded: !updatedQuery.responded,
    createdAt: updatedQuery.createdAt,
    updatedAt: updatedQuery.updatedAt,
  })
})

// @ desc    Permanently delete a query entry from the database
// @route    DELETE /api/query/
// @access   Private
const deleteQuery = asyncHandler(async (req, res) => {
  const query = await Query.findById(req.params.id)
  if (!query) {
    res.status(401)
    throw new Error('Query not found')
  }

  await query.remove()

  res.status(200).json({
    msg: 'success!',
  })
})

module.exports = {
  getQueries,
  sendQuery,
  updateResponded,
  deleteQuery,
}
