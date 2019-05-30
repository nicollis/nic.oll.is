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
          $.ReactNative
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
  ml: {
    title: 'Machine Learning',
    classifications: [
      {
        name: 'Libraries',
        icons: [
          $.Keras,
          $.TensorFlow,
          $.Pytorch,
          $.ScikitLearn,
        ]
      },
      {
        name: 'Languages',
        icons: [
          $.Python,
          $.R,
          $.CPP
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
