const { PageBuilder } = require('admin-bro')
const ArticleModel = require('./../mongoose/article-model')
const UserModel = require('./../mongoose/user-model')
const CommentModel = require('./../mongoose/comment-model')

class DashboardPage extends PageBuilder {
  constructor(props) {
    super(props)
    this.title = 'Collections overview',
    this.subtitle = 'stats'
  }

  async build() {
    const articlesCount = await ArticleModel.countDocuments()
    const publishedArticlesCount = await ArticleModel.find({ published: true }).countDocuments()
    const unpublishedArticlesCount = articlesCount - publishedArticlesCount
    const usersCount = await UserModel.countDocuments()
    const comments = await CommentModel.find()
    const mappedComments = comments.map(comment => { 
      return {
        title: comment.createdBy,
        subtitle: comment.content,
        status: comment.status,
        imgSrc: comment.imgPath
      }
    })
    console.log('mappedComments', mappedComments)
    this.addInfoBlock({
      title: 'The number of all articles',
      value: articlesCount,
      icon: 'fas fa-arrow-alt-circle-up fa-2x',
      columns: 3,
    })
    this.addSuccesBlock({
      title: 'Published articles',
      value: publishedArticlesCount,
      icon: 'fas fa-star fa-2x',
      columns: 3
    })
    this.addWarningBlock({
      title: 'Unpublished articles',
      value: unpublishedArticlesCount,
      icon: 'fas fa-arrow-alt-circle-down fa-2x',
      columns: 3
    })
    this.addInfoBlock({
      title: 'The number of users',
      value: usersCount,
      icon: 'fas fa-star fa-2x',
      columns: 3
    })
    this.addInfoList({
      title: 'Recent comments',
      subtitle: 'Latest comments from user all around the world',
      columns: 6,
      items: mappedComments
    })
    this.addChart()
    this.addInfoTable({
      title: 'Table Information',
      headers: Object.keys(mappedComments[0]),
      items: mappedComments,
      columns: 12
    })
    this.addTextBox({
      title: 'Simple textbox',
      content: '<div> lorem ipsum contentum textum boxum</div>',
      columns: 6
    })
    return {
      title: this.title,
      subtitle: this.subtitle,
      content: this.convertedPageContent()
    }
  }                
}

module.exports = DashboardPage