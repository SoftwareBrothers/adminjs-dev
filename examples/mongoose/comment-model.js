const mongoose = require('mongoose')

const { Schema } = mongoose

const CommentSchema = new Schema({
  content: String,
  createdAt: Date,
  createdBy: String,
  imgPath: String,
  status: String,
  parentCommentId: String,
})

const Comment = mongoose.model('Comment', CommentSchema)

module.exports = Comment
