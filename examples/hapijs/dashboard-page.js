const { PageBuilder } = require('admin-bro')
const ArticleModel = require('./../mongoose/article-model')
const UserModel = require('./../mongoose/user-model')

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
    return {
      title: this.title,
      subtitle: this.subtitle,
      content: this.convertedPageContent()
    }
  }                
}

module.exports = DashboardPage