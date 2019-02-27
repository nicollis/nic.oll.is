import * as $ from '../models/tech'

export default {
  mobile: {
    title: 'Mobile',
    classifications: [
      {
        name: 'Platforms',
        icons: [
          $.Apple,
          $.Android,
          $.React
        ]
      },
      {
        name: 'Languages',
        icons: [
          $.Swift,
          $.Kotlin,
          $.ObjC
        ]
      }
    ]
  },
  web: {
    title: 'Web',
    classifications: [
      {
        name: 'Frameworks',
        icons: [
          $.Rails,
          $.Vue,
          $.React,
        ]
      },
      {
        name: 'Languages',
        icons: [
          $.Ruby,
          $.Javascript,
          $.Postgres,
        ]
      }
    ]
  }
}
