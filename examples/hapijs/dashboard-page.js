const { PageBuilder } = require('admin-bro')
const ArticleModel = require('./../mongoose/article-model')
const UserModel = require('./../mongoose/user-model')
const ClientsModel = require('./../mongoose/clients-model')
const CommentModel = require('./../mongoose/comment-model')
const moment = require('moment')

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
    const clients = await ClientsModel.find()
    let mappedComments = null
    if(comments) {
      mappedComments = comments.map(comment => { 
        return {
          title: comment.createdBy,
          subtitle: comment.content,
          status: comment.status,
          imgSrc: comment.imgPath,
          date: moment(comment.createdAt).format('YYYY-MM-DD')
        }
      })
    }
    this.addBlock({
      title: 'The number of all articles',
      value: articlesCount,
      icon: 'fas fa-arrow-alt-circle-up fa-2x',
      columns: 3,
    }, this.types.info)
    this.addBlock({
      title: 'Published articles',
      value: publishedArticlesCount,
      icon: 'fas fa-star fa-2x',
      columns: 3
    }, this.types.succes)
    this.addBlock({
      title: 'Unpublished articles',
      value: unpublishedArticlesCount,
      icon: 'fas fa-arrow-alt-circle-down fa-2x',
      columns: 3
    }, this.types.warning)
    this.addBlock({
      title: 'The number of users',
      value: usersCount,
      icon: 'fas fa-star fa-2x',
      columns: 3
    }, this.types.info)
    mappedComments && this.addInfoTable({
      title: 'Table Information',
      headers: Object.keys(mappedComments[0]),
      items: mappedComments,
      columns: 12
    })
    this.addTextBox({
      title: 'Lorem ipsum text title',
      content: `
        <div> lorem ipsum contentum textum boxum</div>
        <div> lorem ipsum contentum textum boxum</div>
        <div> lorem ipsum contentum textum boxum</div>
        <div> lorem ipsum contentum textum boxum</div>
      `,
      columns: 6
    })
    mappedComments && this.addInfoList({
      title: 'Recent comments',
      subtitle: 'Latest comments from user all around the world',
      columns: 6,
      items: mappedComments
    })
    this.addTextBox({
      title: 'Simple textbox',
      content: '<div> lorem ipsum contentum textum boxum</div>',
      columns: 6
    })
    this.addChart({
      columns: 6,
      config: {
        name: 'example',
        type: 'line',
        data: {
          labels: clients.map(client => client.month),
          datasets: [
            {
              label: 'label example',
              fill: true,
              backgroundColor: 'orange',
              borderColor: 'tomato',
              data: clients.map(client => client.amount),
            },
          ],
        },
        options: {
          title: {
            fontSize: 20,
            display: true,
            text: 'Title'
          },
        },
      }
    })
  }                
}

module.exports = DashboardPage