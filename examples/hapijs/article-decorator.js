const { BaseDecorator } = require('admin-bro')

class ArticleDecorator extends BaseDecorator {
  constructor(params) {
    super(params)
    this.resourceName = 'Artykuly'
    this.listProperties = ['title', 'content', 'publishedAt']
    this.showProperties = ['title', 'publishedAt']
    this.parent = {
      name: 'Wiedza',
      icon: 'icon-bomb',
    }
    const publishAction = {
      id: 'publish',
      icon: 'share',
      label: 'Publish',
      action: (request, response, view) => {
        const { method } = request
        if (method === 'GET') {
          return 'Some content or form which you want to place here'
        }
        return 'PUBLISH ACTION WORKS'
      },
    }
    this.recordActions = ['show', 'edit', 'remove', publishAction]
  }

  getValue({ record, property, where, helpers }) {
    switch (property.name()) {
    case 'publishedAt':
      return `
        <p>Here goes a paragraph</p>
        <p>and another one</p>
        <a href="${helpers.showRecordUrl(record.resource, record)}">Link somewere</>
      `
    default:
      return super.getValue({ record, property, where, helpers })
    }
  }
}

module.exports = ArticleDecorator
