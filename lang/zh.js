const { extractLanguageFromTable } = require('./utils')

export default {
  // navbar
  speakers: '講者',
  agenda: '投稿',
  partners: '合作夥伴',
  transport: '交通',
  live: '直播',
  feed: '社群動態',
  staff: '工作人員',
  registration: '立即購票',
  cfp: '議程徵集',
  cfpClosed: '投稿截止',
  cfpClosedDescription: '繼續修改稿件內容',
  cfpFinalized: '稿件修改截止',
  eoAugust: '8 月底',
  programAnnouncement: '公布議程',

  // transportation
  venuelocationName: '地點名稱-華語',
  venuelocationNameShort: '地點名稱-短-華語',
  venuelocationAddress: '地址-華語',
  venuelocationEventName: '活動名稱-華語',
  venuelocationSubEventName: '子活動名稱-華語',
  events: '活動',
  driveToVenue: '開車前往',
  publicTransportationToVenue: '搭乘大眾交通工具',
  noContentYet: '尚無內容',

  // articles
  'article/example': require('~/assets/articles/範例文案1.zh.md').default,
  'article/cohostIntro': require('~/assets/articles/共同主辦介紹.zh.md').default,
  'article/communityIntro': require('~/assets/articles/社群簡介.zh.md').default,
  'article/summitIntro': require('~/assets/articles/雙年會簡介.zh.md').default,
  'article/summitContent': require('~/assets/articles/雙年會內容.zh.md').default,
  'article/summitAbout': require('~/assets/articles/關於雙年會.zh.md').default,
  'article/summitGuidelines': require('~/assets/articles/行為準則.zh.md').default,

  // tables
  'table/roughSchedule': extractLanguageFromTable({
    rows: require('~/assets/tables/首頁大時程.json'),
    isEn: false
  }),
  'table/location': extractLanguageFromTable({
    rows: require('~/assets/tables/交通地理位置.json'),
    isEn: false
  })
}
