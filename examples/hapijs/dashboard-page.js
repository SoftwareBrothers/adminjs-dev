const { BasePage } = require('admin-bro')
// const cheerio = require('cheerio')

class DashboardPage extends BasePage {
  constructor(params) {
    super(params)
    this.title = 'some title'
    this.id = 'some-id-which-will-be-in-url'
    this.baseBlocks = {
      infoBox: {
        title: 'Monthly Recurring Revenue',
        value: 13213,
        icon: 'arrow-up'
      },
      infoList: {
        title: 'Monthly Recurring Revenue',
        value: 13213,
        icon: 'arrow-up'
      },
      infoTable: {
        title: 'Monthly Recurring Revenue',
        value: 13213,
        icon: 'arrow-up'
      },
      infoBox: {
        title: 'Monthly Recurring Revenue',
        value: 13213,
        icon: 'arrow-up'
      }
    }
  }

  async build() {
    return this.addBlocks()
  }
  
  addBlocks() {
    return 'sdada'
    // return cheerio.load('<h2 class="title">Hello world</h2>')
  }
}

module.exports = DashboardPage
